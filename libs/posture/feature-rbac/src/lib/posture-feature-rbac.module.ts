import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbacPageComponent } from './rbac-page.component';
import { Route, RouterModule } from '@angular/router';
import { PageHeaderModule } from '@armo/shared';

export const armoPostureRbacFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: RbacPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoPostureRbacFeatureRoutes),
    PageHeaderModule
  ],
  declarations: [
    RbacPageComponent
  ],
})
export class PostureFeatureRbacModule {}
