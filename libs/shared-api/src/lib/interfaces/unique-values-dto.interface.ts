import { IKeyCount } from './key-count.interface';

export interface IUniqueValuesDTO {
  fields: {
    [key: string]: string[];
  };
  fieldsCount: {
    [key: string]: IKeyCount[];
  }
}
