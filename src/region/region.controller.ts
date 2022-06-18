import { Controller, Get } from '@nestjs/common';

@Controller('region')
export class RegionController {
  @Get()
  all(): string {
    return 'ok';
  }
  @Get('daily')
  daily(): string {
    return 'ok';
  }
  @Get('real')
  real(): string {
    return 'ok';
  }
  @Get('province')
  province(): string {
    return 'ok';
  }
}
