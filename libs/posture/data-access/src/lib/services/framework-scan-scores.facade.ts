import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFrameworkScore } from '@armo/posture/domain';
import { PostureRepository } from '@armo/posture/api';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';
import { IPagedDataDTO } from '@armo/shared-api';

@Injectable({ providedIn: 'root' })
export class FrameworkScanScoresFacade {

  scanScores$: Observable<IFrameworkScore[]>;
  #scanScoresSubject$ = new BehaviorSubject<IFrameworkScore[]>([]);

  constructor(
    private postureRepository: PostureRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.scanScores$ = this.#scanScoresSubject$.asObservable();
  }

  fetchScanScores(scopeFilter?: ISelectedFilters): Observable<IPagedDataDTO<IFrameworkScore>> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const result = this.postureRepository.fetchScanScores(
      customerGuid,
      scopeFilter?.cluster,
      scopeFilter?.datacenter,
      scopeFilter?.namespace,
      scopeFilter?.project
    ).pipe(share());
    result.subscribe((data: IPagedDataDTO<IFrameworkScore>) => {
      this.#scanScoresSubject$.next(data.response);
    });
    return result;
  }

}
