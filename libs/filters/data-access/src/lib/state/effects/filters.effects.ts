import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';

import {
  LoadFilters,
  LoadFiltersSuccess,
  LoadFiltersFail
} from '../actions';

import { FiltersRepository } from '@armo/filters/api';
import { CustomersFacade } from '@armo/customers/data-access';

@Injectable()
export class FiltersEffects {

  loadFilters$ = createEffect(() => this.actions$.pipe(
    ofType(LoadFilters),
    withLatestFrom(this.customersFacade.selectedCustomer$),
    switchMap(([action, selectedCustomerGuid]) =>
      this.filtersRepository.fetchFilters(selectedCustomerGuid)
        .pipe(
          map(filters => LoadFiltersSuccess({ filters })),
          catchError(() => LoadFiltersFail)
        ))
  ));

  constructor(
    private actions$: Actions,
    private filtersRepository: FiltersRepository,
    private customersFacade: CustomersFacade
  ) {}
}
