import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpAdapter } from './http.adapter';

@Injectable()
export class HttpService {
  constructor(protected http: HttpClient) {}

  protected getDefaultHeaders() {
    return {};
  }

  protected responseInterceptor(result: Observable<HttpResponse<any>>, adapter?: Function): Observable<any> {
    return result.pipe(map((res) => HttpAdapter.baseAdapter(res, adapter)));
  }
}
