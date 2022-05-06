import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { ISelectedFilters } from '@armo/filters/domain';
import { IUniqueValuesDTO, UniqueValuesApi, UniqueValuesFacade } from '@armo/shared-api';
import { CustomersFacade } from '@armo/customers/data-access';

@Injectable({ providedIn: 'root' })
export class PostureFacade {

  frameworks$: Observable<string[]>;
  #frameworksSubject$ = new BehaviorSubject<string[]>([]);

  constructor(
    private uniqueValuesFacade: UniqueValuesFacade,
    private customersFacade: CustomersFacade
  ) {
    this.frameworks$ = this.#frameworksSubject$.asObservable();
  }

  fetchFrameworkList(scopeFilter?: ISelectedFilters): Observable<IUniqueValuesDTO> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const requestBody: UniqueValuesApi = new UniqueValuesApi({
      fields: { 'frameworkName': '' }
    });
    const result = this.uniqueValuesFacade.fetch(
      'posture',
      customerGuid,
      scopeFilter ?? { } as ISelectedFilters,
      requestBody
    ).pipe(share());
    result.subscribe((data: IUniqueValuesDTO) => {
      this.#frameworksSubject$.next(data?.fields?.frameworkName);
    });
    return result;
  }

}
