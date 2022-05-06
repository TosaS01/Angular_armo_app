import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiVersion,
  BaseUrl,
  Body,
  DefaultHeaders,
  HttpService,
  Path,
  POST,
  Query,
} from '@armo/util-http';
import { IUniqueValuesDTO, UniqueValuesApi } from '@armo/shared-api';

@BaseUrl('api')
@ApiVersion('v1')
@DefaultHeaders()
@Injectable({ providedIn: 'root' })
export class UniqueValuesRepository extends HttpService{

  @POST('/uniqueValues/{entity}')
  fetch(
    @Path('entity') entity: string,
    @Query('customerGUID') customerGuid: string,
    @Query('cluster') cluster?: string[],
    @Query('datacenter') datacenter?: string[],
    @Query('namespace') namespace?: string[],
    @Query('project') project?: string[],
    @Body data?: UniqueValuesApi
  ): Observable<IUniqueValuesDTO> {
    return null!;
  }

}

