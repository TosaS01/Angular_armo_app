import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { HttpCacheWithMapService } from './http-cache-with-map.service';
import { HttpCacheStorage } from './models/http-cache-storage';
import { HttpCacheInterceptor } from './http-cache-interceptor';

@NgModule({
  imports: [HttpClientModule]
})
export class UtilHttpModule {
  static forRoot(): ModuleWithProviders<UtilHttpModule> {
    return {
      ngModule: UtilHttpModule,
      providers: [
        HttpService,
        {
          provide: HttpCacheStorage,
          useClass: HttpCacheWithMapService
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpCacheInterceptor,
          multi: true
        },
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: UtilHttpModule) {
    if (parentModule) {
      throw new Error('HttpServiceModule is already loaded. Import it in the AppModule only.');
    }
  }
}
