import { Injectable } from '@angular/core';
import { Adapter, ApiVersion, BaseUrl, DefaultHeaders, EntityName, GET, HttpService, Query } from '@armo/util-http';
import { FilterTypeEnum, FilterTypeTextEnum, IFilters, IFiltersDTO } from '@armo/filters/domain';
import { Observable } from 'rxjs';

@BaseUrl('')
@ApiVersion('v1')
@EntityName('filters')
@DefaultHeaders()
@Injectable({ providedIn: 'root' })
export class FiltersRepository extends HttpService{

  static filtersAdapter(data: IFiltersDTO): IFilters {
    return {
      cluster: data.cluster ? Object.entries(data.cluster).map(entry => Object.assign({}, {
        name: entry[0],
        extendedName: `${FilterTypeTextEnum.Cluster}: ${entry[0]}`,
        parent: null,
        value: entry[1],
        type: FilterTypeEnum.Cluster
      })) : [],
      datacenter: data.datacenter ? Object.entries(data.datacenter).map(entry => Object.assign({}, {
        name: entry[0],
        extendedName: `${FilterTypeTextEnum.DataCenter}: ${entry[0]}`,
        parent: null,
        value: entry[1],
        type: FilterTypeEnum.DataCenter
      })) : [],
      namespace: data.namespace ? Object.entries(data.namespace).map(entry => Object.assign({}, {
        name: entry[0].split('/')[1],
        extendedName: `${FilterTypeTextEnum.Namespace}: ${entry[0].split('/')[1]}`,
        parent: entry[0].split('/')[0],
        value: entry[1],
        type: FilterTypeEnum.Namespace
      })) : [],
      project: data.project ? Object.entries(data.project).map(entry => Object.assign({}, {
        name: entry[0].split('/')[1],
        extendedName: `${FilterTypeTextEnum.Project}: ${entry[0].split('/')[1]}`,
        parent: entry[0].split('/')[0],
        value: entry[1],
        type: FilterTypeEnum.Project
      })) : [],
    };
  }

  @GET('')
  @Adapter(FiltersRepository.filtersAdapter)
  fetchFilters(
    @Query('customerGUID') customerGuid: string
  ): Observable<IFilters> {
    return null!;
  }

}

