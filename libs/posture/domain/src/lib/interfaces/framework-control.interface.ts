import { ControlStatusEnum } from '@armo/shared';

export interface  IFrameworkControl {
  name: string;
  affectedResourcesCount: number;
  scoreImprove: number;
  frameworkName: string;
  remediation: string,
  status: ControlStatusEnum;
  statusText: string;
  section: string;
}
