import { RegionService } from './region.service';
import { Module } from '@nestjs/common';
import { RegionController } from './region.controller';

@Module({
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
