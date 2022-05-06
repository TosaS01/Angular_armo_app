import { HttpResponse } from '@angular/common/http';

import { HttpStatus } from './enums/http-status.enum';

export class HttpAdapter {
  static baseAdapter(res: HttpResponse<any>, adapterFn?: Function): any {
    if (res.status === HttpStatus.Ok || res.status === HttpStatus.Created) {
      if ('body' in res) {
        if (adapterFn) {
          let adaptedData;
          try {
            adaptedData = adapterFn.call(undefined, res.body);
          }
          catch (e) {
            console.error(e);
          }
          return adaptedData;
        } else {
          return res.body;
        }
      } else {
        return res;
      }
    }
  }
}
