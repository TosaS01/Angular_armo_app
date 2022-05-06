import { Action, createReducer, on } from '@ngrx/store';
import { FilterTypeEnum, IFilter } from '@armo/filters/domain';

import { SelectFilter, ClearSelection } from '../actions';

export const SELECTED_FILTERS_ENTITY_KEY = 'entity-selected-filters';

export interface SelectedFiltersState {
  cluster: string[],
  datacenter: string[],
  namespace: string[],
  project: string[]
}

export const initialState: SelectedFiltersState = {
  cluster: [],
  datacenter: [],
  namespace: [],
  project: []
};

const selectedFiltersReducers = createReducer(initialState,
  on(SelectFilter, (state, { item, checked }) => ({
      ...state,
      cluster: processSelectedClusterFilters(state, { item, checked }),
      datacenter: processSelectedDataCenterFilters(state, { item, checked }),
      namespace: processSelectedNamespaceFilters(state, { item, checked }),
      project: processSelectedProjectFilters(state, { item, checked }),
  })),
  on(ClearSelection, (state) => ({
    ...state,
    cluster: [],
    datacenter: [],
    namespace: [],
    project: []
  })),
);

export function selectedFiltersReducer(state: SelectedFiltersState, action: Action) {
  return selectedFiltersReducers(state, action);
}

function processSelectedClusterFilters(state: SelectedFiltersState, data: {item: IFilter, checked: boolean }) {
  if (Object.is(data.item.type, FilterTypeEnum.Cluster)) {
    return data.checked ?
      [...state.cluster, data.item.name] :
      state.cluster.filter(selectedFilterName => !Object.is(selectedFilterName, data.item.name))
  }
  return state.cluster;
}

function processSelectedDataCenterFilters(state: SelectedFiltersState, data: {item: IFilter, checked: boolean }) {
  if (Object.is(data.item.type, FilterTypeEnum.DataCenter)) {
    return data.checked ?
      [...state.datacenter, data.item.name] :
      state.datacenter.filter(selectedFilterName => !Object.is(selectedFilterName, data.item.name))
  }
  return state.datacenter;
}

function processSelectedNamespaceFilters(state: SelectedFiltersState, data: {item: IFilter, checked: boolean }) {
  if (Object.is(data.item.type, FilterTypeEnum.Namespace)) {
    return data.checked ?
      [...state.namespace, data.item.name] :
      state.namespace.filter(selectedFilterName => !Object.is(selectedFilterName, data.item.name))
  }
  return state.namespace;
}

function processSelectedProjectFilters(state: SelectedFiltersState, data: {item: IFilter, checked: boolean }) {
  if (Object.is(data.item.type, FilterTypeEnum.Project)) {
    return data.checked ?
      [...state.project, data.item.name] :
      state.project.filter(selectedFilterName => !Object.is(selectedFilterName, data.item.name))
  }
  return state.project;
}
