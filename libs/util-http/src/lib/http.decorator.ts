import { HttpService } from './http.service';
import { FPolicy, HttpFetchPolicy } from './enums/http-fetch-policy.enum';
import { HttpMediaType } from './enums/http-media-type.enum';
import { methodBuilder, paramBuilder } from './http-utils';

/* *********************************************
 * Class decorators
 * *********************************************/

/**
 * Set the base URL of REST resource
 * @param {String} url - base URL
 */
export function BaseUrl(url: string) {
  return function<TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getBaseUrl = () => url;
    return Target;
  };
}

/**
 * Set the API version of REST resource
 * @param {string} version - resource API version
 */
export function ApiVersion(version: string) {
  return function<TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getApiVersion = () => version;
    return Target;
  };
}

/**
 * Set the entity levelName of REST resource
 * @param {string} entityName - resource entity levelName
 */
export function EntityName(entityName: string) {
  return function<TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getEntityName = () => entityName;
    return Target;
  };
}

/**
 * Set default headers for every method of the HttpService
 * @param {Object} headers - default headers in a key-value pair
 */
export function DefaultHeaders(headers = {}) {
  return function<TFunction extends Function>(Target: TFunction): TFunction {
    Target.prototype.getDefaultHeaders = () => ({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...headers,
    });
    return Target;
  };
}

/* *********************************************
 * Method decorators
 * *********************************************/

/**
 * Set the URL version of REST method
 * @param {string} version - resource url of the method
 */
export function MapToApiVersion(version: string) {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.mapToApiVersion = version;
    return descriptor;
  };
}

/**
 * Skip base url
 */
export function SkipBaseUrl() {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.skipBaseUrl = true;
    return descriptor;
  };
}

/**
 * Skip base url
 */
export function SkipEntityName() {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.skipEntityName = true;
    return descriptor;
  };
}

/**
 * Skip api version
 */
export function SkipApiVersion() {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.skipApiVersion = true;
    return descriptor;
  };
}

/**
 * GET method
 * @param {string} url - resource url of the method
 */
export const GET = methodBuilder('GET');

/**
 * POST method
 * @param {string} url - resource url of the method
 */
export const POST = methodBuilder('POST');

/**
 * PUT method
 * @param {string} url - resource url of the method
 */
export const PUT = methodBuilder('PUT');

/**
 * PATCH method
 * @param {string} url - resource url of the method
 */
export const PATCH = methodBuilder('PATCH');

/**
 * DELETE method
 * @param {string} url - resource url of the method
 */
export const DELETE = methodBuilder('DELETE');

/**
 * HEAD method
 * @param {string} url - resource url of the method
 */
export const HEAD = methodBuilder('HEAD');

/**
 * Set custom headers for a REST method
 * @param {Object} headersDef - custom headers in a key-value pair
 */
export function Headers(headersDef: any) {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.headers = headersDef;
    return descriptor;
  };
}

/**
 * Set response type 'blob' for a REST method
 */
export function ResponseTypeBlob() {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.responseTypeBlob = true;
    return descriptor;
  };
}

/**
 * Set cache headers for a REST method
 * @param {HttpFetchPolicy} fetchPolicy - cache policy definition
 */
export function Cached(fetchPolicy: HttpFetchPolicy = HttpFetchPolicy.CacheFirst) {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.headers = {
      ...descriptor.headers,
      [FPolicy]: fetchPolicy,
    };
    return descriptor;
  };
}

/**
 * Defines the media type(s) that the methods can produce
 * @param MediaType producesDef - MediaType to be sent
 */
export function Produces(producesDef: HttpMediaType) {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.isJSON = producesDef === HttpMediaType.JSON;
    descriptor.isFormData = producesDef === HttpMediaType.FORM_DATA;
    return descriptor;
  };
}

/**
 * Defines the adatper function to modify the API response suitable for the app
 * @param TFunction adapterFn - function to be called
 */
export function Adapter(adapterFn: Function) {
  return function(target: HttpService, propertyKey: string, descriptor: any) {
    descriptor.adapter = adapterFn || null;
    return descriptor;
  };
}

/* *********************************************
 * Parameter decorators
 * *********************************************/

/**
 * Path variable of a method's url, type: string
 * @param {string} key - path key to bind value
 */
export const Path = paramBuilder('Path');

/**
 * Query value of a method's url, type: string
 * @param {string} key - query key to bind value
 */
export const Query = paramBuilder('Query');

/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
export const Body = paramBuilder('Body')('Body');

/**
 * Custom header of a REST method, type: string
 * @param {string} key - header key to bind value
 */
export const Header = paramBuilder('Header');

/**
 * F-Policy header of a REST method that invalidate cache
 // * @param {string} key - header key to bind value
 */
export const FetchPolicy = paramBuilder('Header')(FPolicy);
