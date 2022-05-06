import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { FiltersFacade } from './filters.facade';

@Injectable({
  providedIn: 'root'
})
export class FiltersResolver implements Resolve<boolean> {

  constructor(
    private filtersFacade: FiltersFacade,
  ) {}

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<boolean> {
    this.filtersFacade.loadFilters();

    return combineLatest([
      this.filtersFacade.clusterFilters$,
      this.filtersFacade.dataCenterFilters$
    ]).pipe(
      map(([clusterFilters, dataCenterFilters]) =>
        Array.isArray(clusterFilters) || Array.isArray(dataCenterFilters)
      ),
      take(1)
    )
  }
}
