import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FPolicy, HttpFetchPolicy } from './enums/http-fetch-policy.enum';
import { HttpCacheStorage } from './models/http-cache-storage';

/**
 * If request is cacheable and response is in cache
 * return the cached response as observable.
 * If has F-Policy header that is network-only,
 * then ignore cache using response from next()
 *
 * If not in cache or not cacheable,
 * pass request through to next()
 */
@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(private cache: HttpCacheStorage) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const fetchPolicy = req.headers.get(FPolicy);

    if (!fetchPolicy || fetchPolicy === HttpFetchPolicy.NoCache) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);

    if (fetchPolicy === HttpFetchPolicy.CacheFirst) {
      return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
    }

    if (fetchPolicy === HttpFetchPolicy.NetworkOnly) {
      return sendRequest(req, next, this.cache);
    }

    return next.handle(req);
  }
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: HttpCacheStorage): Observable<HttpEvent<any>> {
  return next.handle(req).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        // Update the cache
        cache.put(req, event);
      }
    })
  );
}
