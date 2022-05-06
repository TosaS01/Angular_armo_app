import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { CLUSTER_FILTERS_ENTITY_KEY, clusterFiltersReducer, CLusterFiltersState } from './cluster-filters.reducer';
import { DATA_CENTER_FILTERS_ENTITY_KEY, dataCenterFiltersReducer, DataCenterFiltersState } from './data-center-filters.reducer';
import { NAMESPACE_FILTERS_ENTITY_KEY, namespaceFiltersReducer, NamespaceFiltersState } from './namespace-filters.reducer';
import { PROJECT_FILTERS_ENTITY_KEY, projectFiltersReducer, ProjectFiltersState } from './project-filters.reducer';
import { SELECTED_FILTERS_ENTITY_KEY, selectedFiltersReducer, SelectedFiltersState } from './selected-filters.reducer';

export const FILTERS_FEATURE_KEY = 'feature-filters';

export interface FiltersState {
  [CLUSTER_FILTERS_ENTITY_KEY]: CLusterFiltersState;
  [DATA_CENTER_FILTERS_ENTITY_KEY]: DataCenterFiltersState;
  [NAMESPACE_FILTERS_ENTITY_KEY]: NamespaceFiltersState;
  [PROJECT_FILTERS_ENTITY_KEY]: ProjectFiltersState;
  [SELECTED_FILTERS_ENTITY_KEY]: SelectedFiltersState;
}

export const reducers: ActionReducerMap<FiltersState> = {
  [CLUSTER_FILTERS_ENTITY_KEY]: clusterFiltersReducer,
  [DATA_CENTER_FILTERS_ENTITY_KEY]: dataCenterFiltersReducer,
  [NAMESPACE_FILTERS_ENTITY_KEY]: namespaceFiltersReducer,
  [PROJECT_FILTERS_ENTITY_KEY]: projectFiltersReducer,
  [SELECTED_FILTERS_ENTITY_KEY]: selectedFiltersReducer
} as ActionReducerMap<FiltersState>;

export const getFiltersFeatureState = createFeatureSelector<FiltersState>(FILTERS_FEATURE_KEY);


