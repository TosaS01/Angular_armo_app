import { HttpRequest, HttpResponse } from '@angular/common/http';

export abstract class HttpCacheStorage {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}
