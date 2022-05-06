import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { CustomersRepository } from '@armo/customers/api';
import { Customer } from '@armo/customers/domain';

@Injectable({ providedIn: 'root' })
export class CustomersFacade {

  customers$: Observable<Customer[]>;
  #customersSubject$ = new BehaviorSubject<Customer[]>([]);
  selectedCustomer$: Observable<string>;
  #selectedCustomerSubject$ = new BehaviorSubject<string>('');

  constructor(private customersRepository: CustomersRepository) {
    this.customers$ = this.#customersSubject$.asObservable();
    this.selectedCustomer$ = this.#selectedCustomerSubject$.asObservable();
  }

  get selectedCustomer(): string {
    return this.#selectedCustomerSubject$.value;
  }

  fetchCustomers(): Observable<Customer[]> {
    const result = this.customersRepository.fetchCustomers().pipe(share());
    result.subscribe((customers: Customer[]) => this.#customersSubject$.next(customers));
    return result;
  }

  setCustomer(customerGuid: string): Observable<void> {
    const result = this.customersRepository.setCustomer({ customerGUID: customerGuid }).pipe(share());
    result.subscribe(() => this.#selectedCustomerSubject$.next(customerGuid));
    return result;
  }

}