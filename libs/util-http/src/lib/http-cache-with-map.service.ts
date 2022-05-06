import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { HttpCacheEntry } from './interfaces/http-cache-entry.interface';
import { HttpCacheStorage } from './models/http-cache-storage';

const maxAge = 3600000; // maximum cache age (ms)

@Injectable()
export class HttpCacheWithMapService implements HttpCacheStorage {

  cache = new Map<string, HttpCacheEntry>();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const sinceLastRead = Date.now() - maxAge;
    const isExpired = cached.lastRead < sinceLastRead;
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(item => {
      if (item.lastRead < expired) {
        this.cache.delete(item.url);
      }
    });
  }
}
