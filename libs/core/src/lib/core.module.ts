import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CustomersFacade } from '@armo/customers/data-access';
import { mergeMap } from 'rxjs/operators';
import { Customer } from '@armo/customers/domain';
import { Observable } from 'rxjs';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';

export function setupCustomersServiceFactory(customersFacade: CustomersFacade) {
  return () => customersFacade.fetchCustomers()?.pipe(
    mergeMap((customers: Customer[]) => {
      const selectedCustomerGuid = customers[0]?.guid;
      return <Observable<void>>customersFacade.setCustomer(selectedCustomerGuid);
    }));
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [],
  exports: [],
  entryComponents: []
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: MAT_TABS_CONFIG,
          useValue: { animationDuration: '0ms' }
        },
        [
          {
            provide: APP_INITIALIZER,
            useFactory: setupCustomersServiceFactory,
            deps: [CustomersFacade],
            multi: true
          },
        ]
      ]
    };
  }
}
