import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IClusterOvertime } from '@armo/posture/domain';

@Component({
  selector: 'armo-clusters-overtime-list',
  templateUrl: './clusters-overtime-list.component.html',
  styleUrls: ['./clusters-overtime-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClustersOvertimeListComponent {
  @Input() clustersOvertime!: IClusterOvertime[] | null;
}
