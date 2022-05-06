import { Action, createReducer, on } from '@ngrx/store';
import { IFilter } from '@armo/filters/domain';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { LoadFiltersSuccess } from '../actions';

export const PROJECT_FILTERS_ENTITY_KEY = 'entity-project-filters';

export interface ProjectFiltersState extends EntityState<IFilter> {
}

export const projectFiltersAdapter: EntityAdapter<IFilter> = createEntityAdapter<IFilter>({
  selectId: (filter: IFilter) => filter.name,
  sortComparer: false
});

export const initialState: ProjectFiltersState = {
  ...projectFiltersAdapter.getInitialState(),
};

const projectFiltersReducers = createReducer(initialState,
  on(LoadFiltersSuccess, (state, {filters}) => ({
    ...projectFiltersAdapter.setAll(filters.project.map((item: IFilter) => item as IFilter), state)
  }))
);

export function projectFiltersReducer(state: ProjectFiltersState, action: Action) {
  return projectFiltersReducers(state, action);
}
