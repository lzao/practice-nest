import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  all(): any {
    return this.regionService.getAll();
  }
  @Get('daily')
  daily(): any {
    return this.regionService.getDaily();
  }
  @Get('real')
  real(): any {
    return this.regionService.getReal();
  }
  @Get('province')
  province(): any {
    return this.regionService.getProvince();
  }
  @Get('stat')
  stat(): object {
    return this.regionService.getStat();
  }
  @Get('live')
  live(): object {
    return this.regionService.getLive();
  }
}
