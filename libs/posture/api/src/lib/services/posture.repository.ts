import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Adapter,
  ApiVersion,
  BaseUrl, Body,
  DefaultHeaders,
  EntityName,
  HttpService,
  POST,
  Query,
} from '@armo/util-http';
import {
  IFrameworkControl,
  IFrameworkResource,
  IScanSummary,
  IFrameworkScore,
  IOvertimeChartData,
  IClusterOvertime
} from '@armo/posture/domain';
import { IPagedDataDTO, PaginationApi } from '@armo/shared-api';
import { PostureAdapter } from './posture.adapter';

@BaseUrl('api')
@ApiVersion('v1')
@EntityName('posture')
@DefaultHeaders()
@Injectable({ providedIn: 'root' })
export class PostureRepository extends HttpService {

  @POST('/summary')
  fetchSummary(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[],
    @Body data?: PaginationApi
  ): Observable<IScanSummary> {
    return null!;
  }

  @POST('/framework')
  fetchScanScores(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[],
    @Body data?: PaginationApi
  ): Observable<IPagedDataDTO<IFrameworkScore>> {
    return null!;
  }

  @POST('/controls')
  fetchControls(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[],
    @Body data?: PaginationApi
  ): Observable<IPagedDataDTO<IFrameworkControl>> {
    return null!;
  }

  @POST('/resources')
  fetchResources(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[],
    @Body data?: PaginationApi
  ): Observable<IPagedDataDTO<IFrameworkResource>> {
    return null!;
  }

  @POST('/overtime')
  @Adapter(PostureAdapter.overtimeChartDataAdapter)
  fetchClusterOvertime(
    @Query('customerGUID') customerGuid: string,
    @Body data?: PaginationApi
  ): Observable<IOvertimeChartData> {
    return null!;
  }

  @POST('/clustersOvertime')
  @Adapter(PostureAdapter.clustersOvertimeAdapter)
  fetchClustersOvertimeList(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Body data?: PaginationApi
  ): Observable<IClusterOvertime[]> {
    return null!;
  }

}

