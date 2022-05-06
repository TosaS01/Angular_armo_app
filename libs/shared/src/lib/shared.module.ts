import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderModule,
  PageHeaderModule,
  SearchInputModule,
  SideNavMenuModule,
  TopNavMenuModule,
  UserMenuModule,
  BackButtonModule
} from './components';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SideNavMenuModule,
    TopNavMenuModule,
    UserMenuModule,
    PageHeaderModule,
    SearchInputModule,
    BackButtonModule
  ],
  exports: [
    HeaderModule,
    SideNavMenuModule,
    TopNavMenuModule,
    UserMenuModule,
    PageHeaderModule,
    SearchInputModule,
    BackButtonModule
  ]
})
export class SharedModule {}
