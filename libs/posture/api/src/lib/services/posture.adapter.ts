import { Injectable } from '@angular/core';
import { IPagedDataDTO } from '@armo/shared-api';
import { IClusterOvertime, IClusterOvertimeDTO, IFrameworkOvertime, IOvertimeChartData } from '@armo/posture/domain';

@Injectable({ providedIn: 'root' })
export class PostureAdapter {

  private static _getOvertimeChartData(items: IFrameworkOvertime[]): IOvertimeChartData {
    const chartData = [];
    const pointsCount = items.length ? items[0].cords.length : 0;
    const xValues = items.length ? items[0].cords.map(cord => cord.timestamp) : [];

    for (let i = 0; i < pointsCount; i++) {
      const date = new Date(xValues[i]);
      let linesPointData: (number | string)[] = [`${date.getUTCDate()}/${date.getUTCMonth() + 1}`];
      for (let j = 0; j < items.length; j++) {
        const yValue = +items[j].cords[i].value;
        linesPointData.push(yValue);
      }
      chartData.push(linesPointData);
    }
    return chartData as IOvertimeChartData;
  }

  static overtimeChartDataAdapter(data: IPagedDataDTO<IFrameworkOvertime>): IOvertimeChartData {
    const items = data.response.map(item => {
      return {
        ...item,
        cords: item.cords.sort((a, b) =>
          (new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()))
      } as IFrameworkOvertime;
    });
    return PostureAdapter._getOvertimeChartData(items);
  }

  static clustersOvertimeAdapter(data: IPagedDataDTO<IClusterOvertimeDTO>): IClusterOvertime[] {
    return data.response.map((cluster) => {
      return {
        ...cluster,
        frameworks: cluster.frameworks.map((framework) => {
          return {
            ...framework,
            cords: framework.cords.sort((a, b) =>
              (new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()))
          }
        })
      }
    }).map(cluster => {
      return {
        ...cluster,
        overtimeChart: PostureAdapter._getOvertimeChartData(cluster.frameworks)
      }
    }) as IClusterOvertime[];
  }
}
