import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiMaterialModule } from '@armo/ui-material';

import { SideNavMenuComponent } from './side-nav-menu.component';
import { SideNavMenuService } from './services';
import { NavItemsListComponent } from './components/nav-items-list/nav-items-list.component';

@NgModule({
  declarations: [
    SideNavMenuComponent,
    NavItemsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiMaterialModule
  ],
  exports: [
    SideNavMenuComponent
  ],
  providers: [
    SideNavMenuService
  ]
})
export class SideNavMenuModule { }
