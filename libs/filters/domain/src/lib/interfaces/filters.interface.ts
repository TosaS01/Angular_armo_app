import { IFilter } from '@armo/filters/domain';

export interface IFilters {
  cluster: IFilter[],
  datacenter: IFilter[],
  namespace: IFilter[],
  project: IFilter[]
}
