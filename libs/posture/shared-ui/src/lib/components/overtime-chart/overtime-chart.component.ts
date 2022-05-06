import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { appColors } from '@armo/shared';
import { IOvertimeChartData } from '@armo/posture/domain';

@Component({
  selector: 'armo-overtime-chart',
  templateUrl: './overtime-chart.component.html',
  styleUrls: ['./overtime-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OvertimeChartComponent {

  @Input() chartTitle!: string;
  @Input() set data(data: IOvertimeChartData | null) {
    if (data) {
      this._buildChart(data);
    }
  }

  chartData!: any;

  constructor(
    private hostElement: ElementRef,
  ) {
  }

  private _buildChart(data: IOvertimeChartData): void {
    this.chartData = {
      type: ChartType.LineChart,
      data: data,
      options: {
        curveType: 'function',
        legend: {
          position: 'none'
        },
        vAxis: {
          textPosition: 'none',
          baselineColor: '#829ED0',
          gridlines: {
            count: 0
          },
          textStyle: {
            color: '#829ED0'
          }
        },
        hAxis: {
          textStyle: {
            color: '#829ED0'
          }
        },
        series: {
          0: { color: appColors[0] },
          1: { color: appColors[1] },
          2: { color: appColors[2] },
        },
        backgroundColor: 'transparent',
        chartArea: {
          left: 0,
          top: 10,
          height: 112,
          width: this.hostElement.nativeElement.offsetWidth
        }
      },
      height: 160,
      width: this.hostElement.nativeElement.offsetWidth
    };
  }

}
