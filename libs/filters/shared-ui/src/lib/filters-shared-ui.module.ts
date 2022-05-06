import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopeFilterComponent } from './containers/scope-filter/scope-filter.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { UiMaterialModule } from '@armo/ui-material';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialModule
  ],
  exports: [
    ScopeFilterComponent
  ],
  declarations: [
    ScopeFilterComponent,
    FilterDropdownComponent,
  ],
})
export class FiltersSharedUiModule {}
