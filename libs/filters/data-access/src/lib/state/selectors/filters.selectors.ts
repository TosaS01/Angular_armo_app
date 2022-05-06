import { createSelector } from '@ngrx/store';

import { getFiltersFeatureState, FiltersState } from '../reducers';
import { clusterFiltersAdapter, CLUSTER_FILTERS_ENTITY_KEY, CLusterFiltersState } from '../reducers/cluster-filters.reducer';
import { dataCenterFiltersAdapter,  DATA_CENTER_FILTERS_ENTITY_KEY, DataCenterFiltersState } from '../reducers/data-center-filters.reducer';
import { namespaceFiltersAdapter, NAMESPACE_FILTERS_ENTITY_KEY, NamespaceFiltersState } from '../reducers/namespace-filters.reducer';
import { projectFiltersAdapter, PROJECT_FILTERS_ENTITY_KEY, ProjectFiltersState } from '../reducers/project-filters.reducer';
import { SELECTED_FILTERS_ENTITY_KEY, SelectedFiltersState } from '../reducers/selected-filters.reducer';

const getCLusterFiltersState = createSelector(
  getFiltersFeatureState,
  (state: FiltersState) => state[CLUSTER_FILTERS_ENTITY_KEY]
);
const getDataCenterFiltersState = createSelector(
  getFiltersFeatureState,
  (state: FiltersState) => state[DATA_CENTER_FILTERS_ENTITY_KEY]
);
const getNamespaceFiltersState = createSelector(
  getFiltersFeatureState,
  (state: FiltersState) => state[NAMESPACE_FILTERS_ENTITY_KEY]
);
const getProjectFiltersState = createSelector(
  getFiltersFeatureState,
  (state: FiltersState) => state[PROJECT_FILTERS_ENTITY_KEY]
);
const getSelectedFiltersState = createSelector(
  getFiltersFeatureState,
  (state: FiltersState) => state[SELECTED_FILTERS_ENTITY_KEY]
);

const getAllClusterFilters = clusterFiltersAdapter.getSelectors(getCLusterFiltersState).selectAll;
const getAllDataCenterFilters = dataCenterFiltersAdapter.getSelectors(getDataCenterFiltersState).selectAll;
const getAllNamespaceFilters = namespaceFiltersAdapter.getSelectors(getNamespaceFiltersState).selectAll;
const getAllProjectFilters = projectFiltersAdapter.getSelectors(getProjectFiltersState).selectAll;

const getSelectedClusterFilters = createSelector(
  getSelectedFiltersState,
  (state: SelectedFiltersState) => state.cluster
);

const getSelectedDataCenterFilters = createSelector(
  getSelectedFiltersState,
  (state: SelectedFiltersState) => state.datacenter
);

const getSelectedNamespaceFilters = createSelector(
  getSelectedFiltersState,
  (state: SelectedFiltersState) => state.namespace
);

const getSelectedProjectFilters = createSelector(
  getSelectedFiltersState,
  (state: SelectedFiltersState) => state.project
);

const getSelectedPrimaryFilters = createSelector(
  getSelectedClusterFilters,
  getSelectedDataCenterFilters,
  (clusterFilters, dataCenterFilters) => [...clusterFilters, ...dataCenterFilters]
);

const getSelectedSecondaryFilters = createSelector(
  getSelectedNamespaceFilters,
  getSelectedProjectFilters,
  (namespaceFilters, projectFilters) => [...namespaceFilters, ...projectFilters]
);

const getPrimaryFilters = createSelector(
  getAllClusterFilters,
  getAllDataCenterFilters,
  (clusterFilters, dataCenterFilters) =>
    [...clusterFilters, ...dataCenterFilters]
);

const getSecondaryFilters = createSelector(
  getAllNamespaceFilters,
  getAllProjectFilters,
  (namespaceFilters, projectFilters) => [...namespaceFilters, ...projectFilters]
);

const getActivePrimaryFilters = createSelector(
  getPrimaryFilters,
  (filters) => filters.filter(item => item.value > 0)
);

const getActiveSecondaryFilters = createSelector(
  getActivePrimaryFilters,
  getSecondaryFilters,
  getSelectedPrimaryFilters,
  (activePrimaryFilters, allSecondaryFilters, selectedPrimaryFilters) => {
    const activePrimaryFilterNames: string[] = activePrimaryFilters.map(item => item.name);
    return allSecondaryFilters.filter(item => {
      if (selectedPrimaryFilters.length) {
        return activePrimaryFilterNames.includes(item.parent ?? '') &&
          selectedPrimaryFilters.includes(item.parent ?? '')
      }
      return activePrimaryFilterNames.includes(item.parent ?? '');
    });
  }
);

const getScopeFilters = createSelector(
  getSelectedClusterFilters,
  getSelectedDataCenterFilters,
  getSelectedNamespaceFilters,
  getSelectedProjectFilters,
  (cluster, datacenter, namespace, project) => ({
    cluster,
    datacenter,
    namespace,
    project
  })
);

export const scopeFiltersQuery = {
  getAllClusterFilters,
  getAllDataCenterFilters,
  getAllNamespaceFilters,
  getAllProjectFilters,
  getSelectedClusterFilters,
  getSelectedDataCenterFilters,
  getSelectedNamespaceFilters,
  getSelectedProjectFilters,
  getPrimaryFilters,
  getSecondaryFilters,
  getActivePrimaryFilters,
  getActiveSecondaryFilters,
  getSelectedPrimaryFilters,
  getSelectedSecondaryFilters,
  getScopeFilters
};
