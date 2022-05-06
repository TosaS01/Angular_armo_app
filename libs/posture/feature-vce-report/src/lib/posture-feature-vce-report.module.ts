import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VceReportPageComponent } from './vce-report-page.component';
import { Route, RouterModule } from '@angular/router';

export const armoPostureFeatureVceReportRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: VceReportPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoPostureFeatureVceReportRoutes)
  ],
  declarations: [
    VceReportPageComponent
  ],
})
export class PostureFeatureVceReportModule {}
