import { Controller, Get } from '@nestjs/common';

@Controller('region')
export class RegionController {
  @Get()
  all(): string {
    return 'ok';
  }
}
