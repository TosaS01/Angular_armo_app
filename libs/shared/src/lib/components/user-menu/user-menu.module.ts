import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '@armo/ui-material';

import { UserMenuComponent } from './user-menu.component';

@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ],
  exports: [
    UserMenuComponent
  ]
})
export class UserMenuModule { }
