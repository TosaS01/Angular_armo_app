import { Action, createReducer, on } from '@ngrx/store';
import { IFilter } from '@armo/filters/domain';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LoadFiltersSuccess } from '../actions';

export const NAMESPACE_FILTERS_ENTITY_KEY = 'entity-namespace-filters';

export interface NamespaceFiltersState extends EntityState<IFilter> {
}

export const namespaceFiltersAdapter: EntityAdapter<IFilter> = createEntityAdapter<IFilter>({
  selectId: (filter: IFilter) => filter.name,
  sortComparer: false
});

export const initialState: NamespaceFiltersState = {
  ...namespaceFiltersAdapter.getInitialState(),
};

const namespaceFiltersReducers = createReducer(initialState,
  on(LoadFiltersSuccess, (state, {filters}) => ({
    ...namespaceFiltersAdapter.setAll(filters.namespace.map((item: IFilter) => item as IFilter), state)
  }))
);

export function namespaceFiltersReducer(state: NamespaceFiltersState, action: Action) {
  return namespaceFiltersReducers(state, action);
}
