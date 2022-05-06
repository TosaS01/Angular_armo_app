import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFrameworkScore } from '@armo/posture/domain';
import { appColors } from '@armo/shared';

@Component({
  selector: 'armo-score-tile',
  templateUrl: './score-tile.component.html',
  styleUrls: ['./score-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreTileComponent {
  @Input() tileIndex!: number;
  @Input() tile!: IFrameworkScore;

  isPostureScore(): boolean {
    return Object.is(this.tile.name.toLowerCase(), 'posture');
  }

  getScanScoreColor(): string {
    return appColors[this.tileIndex];
  }
}
