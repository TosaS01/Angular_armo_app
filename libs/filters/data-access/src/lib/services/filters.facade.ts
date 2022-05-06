import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClearSelection, FiltersState, LoadFilters, scopeFiltersQuery, SelectFilter } from '../state';
import { Observable } from 'rxjs';
import { IFilter, ISelectedFilters } from '@armo/filters/domain';

@Injectable({ providedIn: 'root' })
export class FiltersFacade {

  clusterFilters$: Observable<IFilter[]> = this.store.select(scopeFiltersQuery.getAllClusterFilters);
  dataCenterFilters$: Observable<IFilter[]> = this.store.select(scopeFiltersQuery.getAllDataCenterFilters)
  activePrimaryFilters$: Observable<IFilter[]> = this.store.select(scopeFiltersQuery.getActivePrimaryFilters);
  activeSecondaryFilters$: Observable<IFilter[]> = this.store.select(scopeFiltersQuery.getActiveSecondaryFilters);
  selectedPrimaryFilters$: Observable<string[]> = this.store.select(scopeFiltersQuery.getSelectedPrimaryFilters);
  selectedSecondaryFilters$: Observable<string[]> = this.store.select(scopeFiltersQuery.getSelectedSecondaryFilters);
  selectedScopeFilters$: Observable<ISelectedFilters> = this.store.select(scopeFiltersQuery.getScopeFilters);

  constructor(
    private store: Store<FiltersState>
  ) {
  }

  selectFilter(data: { item: IFilter, checked: boolean }): void {
    this.store.dispatch(SelectFilter(data));
  }

  clearSelection(): void {
    this.store.dispatch(ClearSelection());
  }

  loadFilters(): void {
    this.store.dispatch(LoadFilters());
  }

}
