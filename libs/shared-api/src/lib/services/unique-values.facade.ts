import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ISelectedFilters } from '@armo/filters/domain';
import { IUniqueValuesDTO, UniqueValuesApi, UniqueValuesRepository } from '@armo/shared-api';

@Injectable({ providedIn: 'root' })
export class UniqueValuesFacade {

  constructor(
    private uniqueValuesRepository: UniqueValuesRepository,
  ) {
  }

  fetch(
    entity: string,
    customerGuid: string,
    scopeFilter: ISelectedFilters,
    requestBody: UniqueValuesApi
  ): Observable<IUniqueValuesDTO> {
    return this.uniqueValuesRepository.fetch(
      entity,
      customerGuid,
      scopeFilter.cluster,
      scopeFilter.datacenter,
      scopeFilter.namespace,
      scopeFilter.project,
      requestBody
    ).pipe(share());
  }

}
