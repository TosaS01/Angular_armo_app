import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state/effects';
import { FILTERS_FEATURE_KEY, reducers } from './state/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FILTERS_FEATURE_KEY, reducers),
    EffectsModule.forFeature(effects)
  ],
})
export class FiltersDataAccessModule {}
