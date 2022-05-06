import { HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { last } from 'rxjs/operators';

export function methodBuilder(method: string) {
  return function(url: string) {
    return function(target: any, propertyKey: string, descriptor: any) {
      const pPath = target[`${propertyKey}_Path_parameters`];
      const pQuery = target[`${propertyKey}_Query_parameters`];
      const pBody = target[`${propertyKey}_Body_parameters`];
      const pHeader = target[`${propertyKey}_Header_parameters`];
      descriptor.value = function(...args: any[]) {
        const body: string | null = createBody(pBody, descriptor, args);
        const baseUrl = descriptor.skipBaseUrl ? '' : this.getBaseUrl();
        const apiVersion = descriptor.skipApiVersion ? '' : '/' + (descriptor.mapToApiVersion || this.getApiVersion());
        const entityName = descriptor.skipEntityName ? '' : this.getEntityName ? ('/' + this.getEntityName()) : '';
        const urlRes: string = baseUrl + apiVersion + entityName + createPath(url, pPath, args);
        const params: HttpParams = createQuery(pQuery, args);
        const headers: HttpHeaders = createHeaders(pHeader, descriptor, this.getDefaultHeaders(), args);
        const init: any = { headers, params };
        if (descriptor.responseTypeBlob) {
          init.responseType = 'blob';
        }
        const req: HttpRequest<any> = this.http.request(
          new HttpRequest(method, urlRes, body, init)
        ).pipe(last());

        return this.responseInterceptor(req, descriptor.adapter);
      };
      return descriptor;
    };
  };
}

export function paramBuilder(paramName: string) {
  return function(key: string) {
    return function(target: any, propertyKey: string | symbol, parameterIndex: number) {
      const metadataKey = `${propertyKey.toString()}_${paramName}_parameters`;
      const paramObj: any = {
        key: key,
        parameterIndex: parameterIndex
      };
      if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(paramObj);
      } else {
        target[metadataKey] = [paramObj];
      }
    };
  };
}

function createBody(pBody: Array<any>, descriptor: any, args: Array<any>): string | null {
  if (descriptor['isFormData']) {
    return args[0];
  }
  return pBody ? JSON.stringify(args[pBody[0].parameterIndex]) : null;
}

function createPath(url: string, pPath: Array<any>, args: Array<any>): string {
  let resUrl: string = url;

  if (pPath) {
    for (const k in pPath) {
      if (pPath.hasOwnProperty(k)) {
        resUrl = resUrl.replace('{' + pPath[k].key + '}', args[pPath[k].parameterIndex]);
      }
    }
  }

  return resUrl;
}

function createQuery(pQuery: any, args: Array<any>): HttpParams {
  let params = new HttpParams();
  if (pQuery) {
    pQuery.forEach((p: any) => {
      const key = p.key;
      let value = args[p.parameterIndex];
      if (Array.isArray((value))) {
        value.forEach((val: any) => {
          // params = params.append(encodeURI(key), encodeURI(val));
          params = params.append(key, val);
        });
      } else {
        if (value === null || value === undefined) {
          return;
        }
        if (value instanceof Object) {
          // if the value is a instance of Object, we stringify it
          value = JSON.stringify(value);
        }
        // params = params.set(encodeURI(key), encodeURI(value));
        params = params.set(key, value);
      }
    });
  }
  return params;
}

function createHeaders(pHeader: any, descriptor: any, defaultHeaders: any, args: Array<any>): HttpHeaders {
  let headers = new HttpHeaders(defaultHeaders);

  // set method specific headers
  for (const k in descriptor.headers) {
    if (descriptor.headers.hasOwnProperty(k)) {
      headers = headers.set(k, descriptor.headers[k]);
    }
  }

  // set parameter specific headers
  if (pHeader) {
    for (const k in pHeader) {
      if (pHeader.hasOwnProperty(k)) {
        let value = args[pHeader[k].parameterIndex];
        value = value || JSON.stringify(value);
        if (value) {
          headers = headers.set(pHeader[k].key, value);
        }
      }
    }
  }

  return headers;
}
