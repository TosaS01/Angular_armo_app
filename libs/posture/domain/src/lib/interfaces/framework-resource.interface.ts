import { ResourceKindEnum } from '@armo/shared';

export interface IFrameworkResource {
  name: string;
  numOfFailedControls: number,
  remediation: string;
  resourceKind: ResourceKindEnum;
  frameworkName: string;
}
