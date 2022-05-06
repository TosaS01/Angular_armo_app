import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from './page-header.component';
import { BackButtonModule } from '../back-button/back-button.module';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    BackButtonModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
