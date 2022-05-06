import { IValueRelation } from './value-relation.interface';

export interface IPagedDataDTO<T> {
  total: IValueRelation;
  response: T[];
  cursor: string;
}
