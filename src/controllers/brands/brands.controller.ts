import { Controller, Get, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrand(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `Brands general query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }
}
