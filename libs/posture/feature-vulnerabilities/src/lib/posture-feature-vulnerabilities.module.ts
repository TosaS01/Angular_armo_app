import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UiMaterialModule } from '@armo/ui-material';

import { PostureSharedUiModule } from '@armo/posture/shared-ui';
import { SharedModule } from '@armo/shared';

import { VulnerabilitiesPageComponent } from './vulnerabilities-page.component';
import { VulnerabilitiesNotificationComponent } from './components/vulnerabilities-notification/vulnerabilities-notification.component';
import { VulnerabilitiesFiltersComponent } from './components/vulnerabilities-filters/vulnerabilities-filters.component';
import { VulnerabilitiesFilterItemComponent } from './components/vulnerabilities-filter-item/vulnerabilities-filter-item.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { VulnerabilitiesChartComponent } from './components/vulnerabilities-chart/vulnerabilities-chart.component';
import { VulnerabilitiesTableComponent } from './components/vulnerabilities-table/vulnerabilities-table.component';

export const armoPostureComplianceFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: VulnerabilitiesPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(armoPostureComplianceFeatureRoutes),
    UiMaterialModule,
    PostureSharedUiModule,
    SharedModule
  ],
  declarations: [
    VulnerabilitiesPageComponent,
    VulnerabilitiesNotificationComponent,
    VulnerabilitiesFiltersComponent,
    VulnerabilitiesFilterItemComponent,
    StatusbarComponent,
    VulnerabilitiesChartComponent,
    VulnerabilitiesTableComponent
  ],
})
export class PostureFeatureVulnerabilitiesModule {}
