import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const armoDashboardHomeFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoDashboardHomeFeatureRoutes)
  ],
})
export class DashboardFeatureHomeModule {}
