import { Body, Controller, Post, Query, Res } from '@nestjs/common';

import { postureUniqueValues } from '../../data/posture/posture-unique-values';
import { controls } from '../../data/posture/controls';
import { resources } from '../../data/posture/resources';
import { summary } from '../../data/posture/summary';
import { frameworkScanScores } from '../../data/posture/framework-scan-scores';
import { clustersOvertime } from '../../data/posture/clusters-overtime';

@Controller('api')
export class PostureController {

  @Post('/v1/posture/summary')
  fetchSummary(
    @Query('customerGUID') customerGuid,
    @Body() body: { innerFilters: any }
  ) {
    return summary;
  }

  @Post('/v1/uniqueValues/posture')
  fetchPostureUniqueValues(
    @Res() res,
    @Query('customerGUID') customerGuid,
    @Body() body: { fields: any, innerFilters: any }
  ) {
    setTimeout(() => {
      if (body.fields.hasOwnProperty('frameworkName')) {
        res.send(postureUniqueValues);
      }
    }, 300);
  }

  @Post('/v1/posture/framework')
  fetchScanScores(
    @Query('customerGUID') customerGuid) {
    return frameworkScanScores;
  }

  @Post('/v1/posture/controls')
  fetchControls(
    @Query('customerGUID') customerGuid,
    @Body() body: { innerFilters: any[] }
  ) {
    const frameworkName = body.innerFilters.map((filter) => filter.frameworkName)[0];
    if (frameworkName) {
      const filteredControls = controls.response.filter((control) => control.frameworkName === frameworkName);
      return {
        ...controls,
        total: {
          value: filteredControls.length,
          relation: controls.total.relation
        },
        response: filteredControls
      };
    }
    return controls;
  }

  @Post('/v1/posture/resources')
  fetchResources(
    @Query('customerGUID') customerGuid,
    @Body() body: { innerFilters: any[] }
  ) {
    const frameworkName = body.innerFilters.map((filter) => filter.frameworkName).filter(filter => !!filter)[0];
    const kind = body.innerFilters.map((filter) => filter.resourceKind).filter(filter => !!filter)[0];
    if (frameworkName) {
      const filteredResources = resources.response.filter((resource) => resource.frameworkName === frameworkName)
      return {
        ...resources,
        total: {
          value: filteredResources.length,
          relation: controls.total.relation
        },
        response: kind ? filteredResources.filter((resource) => resource.resourceKind === kind) : filteredResources
      };
    }
    return resources;
  }

  @Post('/v1/posture/overtime')
  fetchClusterOvertime(
    @Query('customerGUID') customerGuid,
    @Body() body: { innerFilters: any[] }
  ) {
    const clusterName = body.innerFilters.map((filter) => filter.clusterName).filter(filter => !!filter)[0];
    if (clusterName) {
      return {
        total: {
          value: 1,
          relation: 'eq'
        },
        response: clustersOvertime.find(item => item.clusterName === clusterName).frameworks,
        cursor: ''
      }
    }
    return {
      total: {
        value: 1,
        relation: 'eq'
      },
      response: clustersOvertime[0].frameworks,
      cursor: ''
    }
  }

  @Post('/v1/posture/clustersOvertime')
  fetchClustersOvertimeList(
    @Query('customerGUID') customerGuid,
    @Body() body: { innerFilters: any[] }
  ) {
    const searchText = body.innerFilters.map((filter) => filter.clusterName).filter(filter => !!filter)[0];
    if (!!searchText) {
      return {
        total: {
          value: clustersOvertime.filter(item => item.clusterName.indexOf(searchText.split(':')[0]) > -1).length,
          relation: 'eq'
        },
        response: clustersOvertime.filter(item => item.clusterName.indexOf(searchText.split(':')[0]) > -1) ?? [],
        cursor: ''
      }
    }
    return {
      total: {
        value: clustersOvertime.length,
        relation: 'eq'
      },
      response: clustersOvertime,
      cursor: ''
    }
  }

}
