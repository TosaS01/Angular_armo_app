import { FilterTypeEnum } from '../enums';

export interface IFilter {
  name: string;
  extendedName: string;
  parent: string | null;
  value: string | number;
  type: FilterTypeEnum;
}
