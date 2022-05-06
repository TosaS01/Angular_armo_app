import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'armo-total-score-tile',
  templateUrl: './total-score-tile.component.html',
  styleUrls: ['./total-score-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalScoreTileComponent {
  @Input() score!: number | undefined;
}
