import { IFrameworkOvertime } from '@armo/posture/domain';

export interface IClusterOvertimeDTO {
  clusterName: string;
  frameworks: IFrameworkOvertime[];
}
