import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFrameworkControl } from '@armo/posture/domain';
import { PostureRepository } from '@armo/posture/api';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';
import { IPagedDataDTO, PaginationApi } from '@armo/shared-api';

@Injectable({ providedIn: 'root' })
export class FrameworkControlsFacade {

  frameworkControls$: Observable<IFrameworkControl[]>;
  #frameworkControlsSubject$ = new BehaviorSubject<IFrameworkControl[]>([]);
  frameworkControlsTotal$: Observable<number>;
  #frameworkControlsTotalSubject$ = new BehaviorSubject<number>(0);

  constructor(
    private postureRepository: PostureRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.frameworkControls$ = this.#frameworkControlsSubject$.asObservable();
    this.frameworkControlsTotal$ = this.#frameworkControlsTotalSubject$.asObservable();
  }

  fetchControls(frameworkName: string, scopeFilter?: ISelectedFilters): Observable<IPagedDataDTO<IFrameworkControl>> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const requestBody = new PaginationApi({
      pageNum: 1,
      pageSize: 20,
      innerFilters: [{ frameworkName }]
    });
    const result = this.postureRepository.fetchControls(
      customerGuid,
      scopeFilter?.cluster,
      scopeFilter?.datacenter,
      scopeFilter?.namespace,
      scopeFilter?.project,
      requestBody
    ).pipe(share());
    result.subscribe((data: IPagedDataDTO<IFrameworkControl>) => {
      this.#frameworkControlsTotalSubject$.next(+data.total.value);
      this.#frameworkControlsSubject$.next(data.response);
    });
    return result;
  }

}
