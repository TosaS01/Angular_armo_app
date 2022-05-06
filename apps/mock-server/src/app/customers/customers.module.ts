import { Module } from '@nestjs/common';

import { CustomersController } from './customers.controller';

@Module({
  imports: [],
  controllers: [CustomersController]
})
export class CustomersModule {}
