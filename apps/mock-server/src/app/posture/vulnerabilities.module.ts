import { Module } from '@nestjs/common';

import { VulnerabilitiesController } from './vulnerabilities.controller';

@Module({
  imports: [],
  controllers: [VulnerabilitiesController]
})
export class VulnerabilitiesModule {}