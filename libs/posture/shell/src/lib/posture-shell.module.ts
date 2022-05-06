import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FiltersResolver } from '@armo/filters/data-access';

export const armoPostureShellRoutes: Route[] = [
  {
    path: 'posture',
    children: [
      {
        path: '',
        redirectTo: '/posture/overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('@armo/posture/feature-overview').then(
            (m) => m.PostureFeatureOverviewModule
          ),
      },
      {
        path: 'compliance',
        loadChildren: () =>
          import('@armo/posture/feature-compliance').then(
            (m) => m.PostureFeatureComplianceModule
          )
      },
      {
        path: 'compliance/:clusterName',
        loadChildren: () =>
          import('@armo/posture/feature-compliance-details').then(
            (m) => m.PostureFeatureComplianceDetailsModule
          ),
        resolve: {
          filtersResolver: FiltersResolver,
        },
      },
      {
        path: 'vulnerabilities',
        loadChildren: () =>
          import('@armo/posture/feature-vulnerabilities').then(
            (m) => m.PostureFeatureVulnerabilitiesModule
          ),
      },
      {
        path: 'vulnerabilities/:containerScanId',
        loadChildren: () =>
          import('@armo/posture/feature-vce-report').then(
            (m) => m.PostureFeatureVceReportModule
          ),
      },
      {
        path: 'rbac',
        loadChildren: () =>
          import('@armo/posture/feature-rbac').then(
            (m) => m.PostureFeatureRbacModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(armoPostureShellRoutes)],
})
export class PostureShellModule {}
