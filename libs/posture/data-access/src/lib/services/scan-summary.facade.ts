import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { IScanSummary } from '@armo/posture/domain';
import { PostureRepository } from '@armo/posture/api';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';

@Injectable({ providedIn: 'root' })
export class ScanSummaryFacade {

  summary$: Observable<IScanSummary>;
  #summarySubject$ = new BehaviorSubject<IScanSummary>(null!);

  constructor(
    private postureRepository: PostureRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.summary$ = this.#summarySubject$.asObservable();
  }

  fetchSummary(scopeFilter?: ISelectedFilters): Observable<IScanSummary> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const result = this.postureRepository.fetchSummary(
      customerGuid,
      scopeFilter?.cluster,
      scopeFilter?.datacenter,
      scopeFilter?.namespace,
      scopeFilter?.project
    ).pipe(share());
    result.subscribe((data: IScanSummary) => {
      this.#summarySubject$.next(data);
    });
    return result;
  }

}
