import { Action, createReducer, on } from '@ngrx/store';
import { IFilter } from '@armo/filters/domain';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LoadFiltersSuccess } from '../actions';

export const DATA_CENTER_FILTERS_ENTITY_KEY = 'entity-data-center-filters';

export interface DataCenterFiltersState extends EntityState<IFilter> {
}

export const dataCenterFiltersAdapter: EntityAdapter<IFilter> = createEntityAdapter<IFilter>({
  selectId: (filter: IFilter) => filter.name,
  sortComparer: false
});

export const initialState: DataCenterFiltersState = {
  ...dataCenterFiltersAdapter.getInitialState(),
};

const dataCenterFiltersReducers = createReducer(initialState,
  on(LoadFiltersSuccess, (state, {filters}) => ({
    ...dataCenterFiltersAdapter.setAll(filters.datacenter.map((item: IFilter) => item as IFilter), state)
  }))
);

export function dataCenterFiltersReducer(state: DataCenterFiltersState, action: Action) {
  return dataCenterFiltersReducers(state, action);
}
