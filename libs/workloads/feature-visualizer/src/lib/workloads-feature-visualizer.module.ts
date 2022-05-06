import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { VisualizerPageComponent } from './visualizer-page.component';

export const armoWorkloadsFeatureVisualizerRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: VisualizerPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoWorkloadsFeatureVisualizerRoutes)
  ],
  declarations: [
    VisualizerPageComponent
  ],
})
export class WorkloadsFeatureVisualizerModule {}
