import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UiMaterialModule } from '@armo/ui-material';

import { PostureSharedUiModule } from '@armo/posture/shared-ui';
import { PageHeaderModule, EnumToArrayModule, BackButtonModule } from '@armo/shared';

import { ComplianceDetailsPageComponent } from './compliance-details-page.component';
import { FrameworkControlsTableComponent } from './components/framework-controls-table/framework-controls-table.component';
import { FrameworkResourcesTableComponent } from './components/framework-resources-table/framework-resources-table.component';
import { FrameworkControlMapComponent } from './components/framework-control-map/framework-control-map.component';
import { FrameworkTabsGroupComponent } from './components/framework-tabs-group/framework-tabs-group.component';
import { FrameworkDataViewComponent } from './components/framework-data-view/framework-data-view.component';
import { ClusterSummaryInfoComponent } from './components/cluster-summary-info/cluster-summary-info.component';

export const armoPostureComplianceDetailsFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ComplianceDetailsPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    UiMaterialModule,
    RouterModule.forChild(armoPostureComplianceDetailsFeatureRoutes),
    PostureSharedUiModule,
    PageHeaderModule,
    EnumToArrayModule,
    BackButtonModule
  ],
  declarations: [
    ComplianceDetailsPageComponent,
    FrameworkControlsTableComponent,
    FrameworkResourcesTableComponent,
    FrameworkControlMapComponent,
    FrameworkTabsGroupComponent,
    FrameworkDataViewComponent,
    ClusterSummaryInfoComponent,
  ],
})
export class PostureFeatureComplianceDetailsModule {}
