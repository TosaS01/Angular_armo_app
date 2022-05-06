import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'armo-cluster-summary-info',
  templateUrl: './cluster-summary-info.component.html',
  styleUrls: ['./cluster-summary-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClusterSummaryInfoComponent {
  @Input() clusterName!: string;
}
