import { Controller, Get, Query, Res } from '@nestjs/common';

import { filters } from '../../data/filters/filters';

@Controller('')
export class FiltersController {

  @Get('/v1/filters')
  fetchFilters(
    @Res() res,
    @Query('customerGUID') customerGuid) {
    setTimeout(() => {
      res.send(filters);
    }, 300);
  }

}
