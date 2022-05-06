import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CustomersModule } from './customers/customers.module';
import { FiltersModule } from './filters/filters.module';
import { PostureModule } from './posture/posture.module';
import { VulnerabilitiesModule } from './posture/vulnerabilities.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../apps/mock-server/src/static'),
      exclude: ['/*'],
    }),
    CustomersModule,
    FiltersModule,
    PostureModule,
    VulnerabilitiesModule
  ]
})
export class AppModule {}
