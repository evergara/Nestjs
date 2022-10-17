import { Controller, Get, Query } from '@nestjs/common';

@Controller('customs')
export class CustomsController {
  @Get()
  getCustoms(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `Customs general query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }
}
