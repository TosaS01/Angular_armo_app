import { Action, createReducer, on } from '@ngrx/store';
import { IFilter } from '@armo/filters/domain';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LoadFiltersSuccess } from '../actions';

export const CLUSTER_FILTERS_ENTITY_KEY = 'entity-cluster-filters';

export interface CLusterFiltersState extends EntityState<IFilter> {
}

export const clusterFiltersAdapter: EntityAdapter<IFilter> = createEntityAdapter<IFilter>({
  selectId: (filter: IFilter) => filter.name,
  sortComparer: false
});

export const initialState: CLusterFiltersState = {
  ...clusterFiltersAdapter.getInitialState()
};

const clusterFiltersReducers = createReducer(initialState,
  on(LoadFiltersSuccess, (state, {filters}) => ({
    ...clusterFiltersAdapter.setAll(filters.cluster.map((item: IFilter) => item as IFilter), state)
  }))
);

export function clusterFiltersReducer(state: CLusterFiltersState, action: Action) {
  return clusterFiltersReducers(state, action);
}
