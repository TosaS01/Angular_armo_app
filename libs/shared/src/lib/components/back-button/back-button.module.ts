import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonDirective } from './back-button.directive';
import { BackButtonComponent } from './back-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BackButtonComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BackButtonComponent,
    BackButtonDirective
  ]
})
export class BackButtonModule { }
