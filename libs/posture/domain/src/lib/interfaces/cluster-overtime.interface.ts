import { IFrameworkOvertime, IOvertimeChartData } from '@armo/posture/domain';

export interface IClusterOvertime {
  clusterName: string;
  frameworks: IFrameworkOvertime[];
  overtimeChart: IOvertimeChartData;
}
