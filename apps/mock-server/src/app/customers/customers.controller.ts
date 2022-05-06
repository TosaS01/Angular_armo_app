import { Body, Controller, Get, Post, Res } from '@nestjs/common';

import { customers } from '../../data/customers/customers';

@Controller('')
export class CustomersController {

  @Get('/openid_customers')
  getFilters(@Res() res) {
    setTimeout(() => {
      res.send(customers);
    }, 100);
  }

  @Post('/openid_customers')
  setCustomer(@Body() { customerGUID: string }, @Res() res) {
    setTimeout(() => {
      res.send()
    }, 500);
  }

}
