import { Module } from '@nestjs/common';

import { PostureController } from './posture.controller';

@Module({
  imports: [],
  controllers: [PostureController]
})
export class PostureModule {}
