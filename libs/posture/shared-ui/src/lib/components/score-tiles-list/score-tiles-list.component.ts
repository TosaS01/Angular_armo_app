import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFrameworkScore } from '@armo/posture/domain';

@Component({
  selector: 'armo-score-tiles-list',
  templateUrl: './score-tiles-list.component.html',
  styleUrls: ['./score-tiles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreTilesListComponent {
  @Input() tiles!: IFrameworkScore[] | null;
}
