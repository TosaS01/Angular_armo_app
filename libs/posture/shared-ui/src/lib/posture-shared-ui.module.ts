import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMaterialModule } from '@armo/ui-material';
import { GoogleChartsModule } from 'angular-google-charts';

import { ScoreTileComponent } from './components/score-tile/score-tile.component';
import { ScoreTilesListComponent } from './components/score-tiles-list/score-tiles-list.component';
import { TotalScoreTileComponent } from './components/total-score-tile/total-score-tile.component';
import { LastRunComponent } from './components/last-run/last-run.component';
import { OvertimeChartComponent } from './components/overtime-chart/overtime-chart.component';
import { VulnerabilityOvertimeChartComponent } from './components/vulnerability-overtime-chart/vulnerability-overtime-chart.component';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialModule,
    GoogleChartsModule
  ],
  exports: [
    ScoreTileComponent,
    ScoreTilesListComponent,
    TotalScoreTileComponent,
    LastRunComponent,
    OvertimeChartComponent,
    VulnerabilityOvertimeChartComponent
  ],
  declarations: [
    ScoreTileComponent,
    ScoreTilesListComponent,
    TotalScoreTileComponent,
    LastRunComponent,
    OvertimeChartComponent,
    VulnerabilityOvertimeChartComponent
  ],
})
export class PostureSharedUiModule {}