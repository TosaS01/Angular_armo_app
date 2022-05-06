import { HttpResponse } from '@angular/common/http';

export interface HttpCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}
