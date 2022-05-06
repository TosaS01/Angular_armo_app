import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

export const armoWorkloadsShellRoutes: Route[] = [
  {
    path: 'explorer',
    children: [
      {
        path: '',
        redirectTo: '/explorer/inventory',
        pathMatch: 'full'
      },
      {
        path: 'inventory',
        loadChildren: () => import('@armo/workloads/feature-inventory').then(m => m.WorkloadsFeatureInventoryModule),
      },
      {
        path: 'visualizer',
        loadChildren: () => import('@armo/workloads/feature-visualizer').then(m => m.WorkloadsFeatureVisualizerModule),
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoWorkloadsShellRoutes)
  ],
})
export class WorkloadsShellModule {}
