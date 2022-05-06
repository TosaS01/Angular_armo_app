import { ICustomerDTO } from '../interfaces';

export class Customer {
  guid: string;
  name: string;

  constructor(data: ICustomerDTO) {
    this.guid = data.customerGUID ?? null;
    this.name = data.customerName ?? '';
  }
}
