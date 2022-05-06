import { createAction, props } from '@ngrx/store';

import { IFilter, IFilters } from '@armo/filters/domain';

export const LoadFilters = createAction('[Filters] Load filters');
export const LoadFiltersSuccess = createAction('[Filters] Load filters success', props<{ filters: IFilters }>());
export const LoadFiltersFail = createAction('[Filters] Load filters fail');

export const SelectFilter = createAction('[Filters] Select Filter', props<{ item: IFilter, checked: boolean }>());
export const ClearSelection = createAction('[Filters] Clear Selection');

