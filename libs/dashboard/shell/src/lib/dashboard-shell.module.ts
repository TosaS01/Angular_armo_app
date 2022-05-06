import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

export const armoDashboardShellRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('@armo/dashboard/feature-home').then(m => m.DashboardFeatureHomeModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoDashboardShellRoutes)
  ],
})
export class DashboardFeatureShellModule {}
