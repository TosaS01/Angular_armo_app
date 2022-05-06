import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IClusterOvertime, IFrameworkOvertime } from '@armo/posture/domain';
import { appColors } from '@armo/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'armo-clusters-overtime-tile',
  templateUrl: './clusters-overtime-tile.component.html',
  styleUrls: ['./clusters-overtime-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClustersOvertimeTileComponent {
  @Input() clusterOvertime!: IClusterOvertime;

  constructor(
    private router: Router,
  ) {
  }

  getFrameworkColor(index: number): string {
    return appColors[index];
  }

  getRiskScore(framework: IFrameworkOvertime): number {
    return +framework.cords[0].value;
  }

  onNavigateClusterOvertime(clusterName: string): void {
    this.router.navigate([`/posture/compliance/${clusterName}`]);
  }
}
