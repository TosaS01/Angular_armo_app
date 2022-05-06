import { Module } from '@nestjs/common';

import { FiltersController } from './filters.controller';

@Module({
  imports: [],
  controllers: [FiltersController]
})
export class FiltersModule {}
