import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UiMaterialModule } from '@armo/ui-material';

import { PostureSharedUiModule } from '@armo/posture/shared-ui';
import { EnumToArrayModule, PageHeaderModule, SearchInputModule } from '@armo/shared';

import { CompliancePageComponent } from './compliance-page.component';
import { ClustersOvertimeListComponent } from './components/clusters-overtime-list/clusters-overtime-list.component';
import { ClustersOvertimeTileComponent } from './components/clusters-overtime-tile/clusters-overtime-tile.component';


export const armoPostureComplianceFeatureRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: CompliancePageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    UiMaterialModule,
    RouterModule.forChild(armoPostureComplianceFeatureRoutes),
    PostureSharedUiModule,
    PageHeaderModule,
    SearchInputModule,
    EnumToArrayModule,
  ],
  declarations: [
    CompliancePageComponent,
    ClustersOvertimeListComponent,
    ClustersOvertimeTileComponent
  ],
})
export class PostureFeatureComplianceModule {}
