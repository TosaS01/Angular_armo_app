import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OverviewPageComponent } from './overview-page.component';

export const armoPostureOverviewFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: OverviewPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoPostureOverviewFeatureRoutes)
  ],
  declarations: [
    OverviewPageComponent
  ],
})
export class PostureFeatureOverviewModule {}
