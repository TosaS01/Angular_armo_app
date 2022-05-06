import {
  ApiVersion,
  BaseUrl,
  DefaultHeaders, 
  POST,
  Query,
  EntityName,
  HttpService, 
} from '@armo/util-http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vulnerability, VulnerabilityOvertime, VulnerabilitySumSummary } from '@armo/posture/domain';

@BaseUrl('api')
@ApiVersion('v1')
@EntityName('vulnerability')
@DefaultHeaders()
@Injectable({ providedIn: 'root' })
export class VulnerabilitiesRepository extends HttpService {
  
  @POST('/severity') 
  fetchVulnerabilities(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[]
  ): Observable<Vulnerability[]> {
    return null!;
  }

  @POST('/overtime') 
  fetchVulnerabilitiesOvertime(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[]
  ): Observable<VulnerabilityOvertime[]> {
    return null!;
  }

  @POST('/scanResultsSumSummary') 
  fetchVulnerabilitiesSumSummary(
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[]
  ): Observable<VulnerabilitySumSummary[]> {
    return null!;
  }
  
}

