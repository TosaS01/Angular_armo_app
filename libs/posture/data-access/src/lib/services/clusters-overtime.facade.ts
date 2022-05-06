import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { IClusterOvertime, IOvertimeChartData } from '@armo/posture/domain';
import { PostureRepository } from '@armo/posture/api';
import { ISelectedFilters } from '@armo/filters/domain';
import { CustomersFacade } from '@armo/customers/data-access';
import { PaginationApi } from '@armo/shared-api';

@Injectable({ providedIn: 'root' })
export class ClustersOvertimeFacade {

  selectedClusterOvertime$: Observable<IOvertimeChartData>;
  #selectedClusterOvertimeSubject$ = new BehaviorSubject<IOvertimeChartData>([]);
  clustersOvertime$: Observable<IClusterOvertime[]>;
  #clustersOvertimeListSubject$ = new BehaviorSubject<IClusterOvertime[]>([]);

  constructor(
    private postureRepository: PostureRepository,
    private customersFacade: CustomersFacade,
  ) {
    this.selectedClusterOvertime$ = this.#selectedClusterOvertimeSubject$.asObservable();
    this.clustersOvertime$ = this.#clustersOvertimeListSubject$.asObservable();
  }

  fetchClustersOvertimeList(scopeFilter: ISelectedFilters, searchText?: string): Observable<IClusterOvertime[]> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const requestBody = new PaginationApi({
      innerFilters: [
        ...(!!searchText ? [{ clusterName: `${searchText}:like` }]: []),
      ]
    });
    const result = this.postureRepository.fetchClustersOvertimeList(
      customerGuid,
      scopeFilter.cluster,
      requestBody
    ).pipe(share());
    result.subscribe((data: IClusterOvertime[]) => {
      this.#clustersOvertimeListSubject$.next(data);
    });
    return result;
  }

  fetchClusterOvertime(clusterName?: string): Observable<IOvertimeChartData> {
    const customerGuid = this.customersFacade.selectedCustomer;
    const requestBody = new PaginationApi({
      innerFilters: [
        ...(!!clusterName ? [{ clusterName }]: []),
      ]
    });
    const result = this.postureRepository.fetchClusterOvertime(
      customerGuid,
      requestBody
    ).pipe(share());
    result.subscribe((data: IOvertimeChartData) => {
      this.#selectedClusterOvertimeSubject$.next(data);
    });
    return result;
  }

}
