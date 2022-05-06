import { Body, Controller, Get, Post, Res, Query } from '@nestjs/common';

import { vulnerabilities, vulnerabilitiesOvertime, vulnerabilitiesSumSummary } from '../../data/posture/vulnerabilities';

@Controller('api')
export class VulnerabilitiesController {

  @Post('/v1/vulnerability/severity')  
  getVulnerabilities(
    @Res() res,
    @Query('customerGUID') customerGuid,
    @Query('cluster') cluster,
    @Query('datacenter') datacenter,
    @Query('namespace') namespace,
    @Query('project') project     
  ) {
    setTimeout(() => {
      res.send(vulnerabilities);
    }, 100);
  }

  @Post('/v1/vulnerability/overtime')  
  getVulnerabilitiesOvertime(
    @Res() res,
    @Query('customerGUID') customerGuid,
    @Query('cluster') cluster,
    @Query('datacenter') datacenter,
    @Query('namespace') namespace,
    @Query('project') project     
  ) {
    setTimeout(() => {
      res.send(vulnerabilitiesOvertime);
    }, 100);
  }

  @Post('/v1/vulnerability/scanResultsSumSummary')  
  getVulnerabilitiesSumSummary(
    @Res() res,
    @Query('customerGUID') customerGuid,
    @Query('cluster') cluster,
    @Query('datacenter') datacenter,
    @Query('namespace') namespace,
    @Query('project') project     
  ) {
    setTimeout(() => {
      res.send(vulnerabilitiesSumSummary);
    }, 100);
  }
  
}