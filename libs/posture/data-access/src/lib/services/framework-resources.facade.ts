import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFrameworkResource } from '@armo/posture/domain';
import { PostureRepository } from '@armo/posture/api';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';
import { IPagedDataDTO, PaginationApi } from '@armo/shared-api';

@Injectable({ providedIn: 'root' })
export class FrameworkResourcesFacade {

  frameworkResources$: Observable<IFrameworkResource[]>;
  #frameworkResourcesSubject$ = new BehaviorSubject<IFrameworkResource[]>([]);
  frameworkResourcesTotal$: Observable<number>;
  #frameworkResourcesTotalSubject$ = new BehaviorSubject<number>(0);

  constructor(
    private postureRepository: PostureRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.frameworkResources$ = this.#frameworkResourcesSubject$.asObservable();
    this.frameworkResourcesTotal$ = this.#frameworkResourcesTotalSubject$.asObservable();
  }

  fetchResources(frameworkName?: string, resourceKind?: string, scopeFilter?: ISelectedFilters): Observable<IPagedDataDTO<IFrameworkResource>> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const requestBody = new PaginationApi({
      pageNum: 1,
      pageSize: 20,
      innerFilters: [
        ...(frameworkName ? [{ frameworkName }]: []),
        ...(resourceKind ? [{ resourceKind }]: []),
      ]
    });
    const result = this.postureRepository.fetchResources(
      customerGuid,
      scopeFilter?.cluster,
      scopeFilter?.datacenter,
      scopeFilter?.namespace,
      scopeFilter?.project,
      requestBody
    ).pipe(share());
    result.subscribe((data: IPagedDataDTO<IFrameworkResource>) => {
      this.#frameworkResourcesTotalSubject$.next(+data.total.value);
      this.#frameworkResourcesSubject$.next(data.response);
    });
    return result;
  }

}
