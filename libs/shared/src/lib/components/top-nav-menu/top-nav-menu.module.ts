import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '@armo/ui-material';

import { TopNavMenuComponent } from './top-nav-menu.component';

@NgModule({
  declarations: [
    TopNavMenuComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ],
  exports: [
    TopNavMenuComponent
  ]
})
export class TopNavMenuModule { }
