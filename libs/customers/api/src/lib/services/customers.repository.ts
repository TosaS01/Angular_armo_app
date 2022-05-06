import {
  ApiVersion,
  BaseUrl,
  DefaultHeaders,
  Adapter,
  GET,
  HttpService,
  POST,
  Body,
  SkipApiVersion
} from '@armo/util-http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, ICustomerDTO } from '@armo/customers/domain';

@BaseUrl('')
@ApiVersion('v1')
@DefaultHeaders()
@Injectable({ providedIn: 'root' })
export class CustomersRepository extends HttpService {

  static customersAdapter(data: ICustomerDTO[]) {
    return data.map(item => new Customer(item));
  }

  @GET('/openid_customers')
  @SkipApiVersion()
  @Adapter(CustomersRepository.customersAdapter)
  fetchCustomers(): Observable<Customer[]> {
    return null!;
  }

  @POST('/openid_customers')
  @SkipApiVersion()
  setCustomer(@Body data: { customerGUID: string }): Observable<void> {
    return null!;
  }


}

