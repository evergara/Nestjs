import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `Products general query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `Product filter`;
  }

  @Get(':productID')
  getProduct(@Param() Params: any, @Query() queries: any) {
    const { limit, offset } = queries;
    return `Product params ${Params.productID} query_ limit => ${limit} offset: => ${offset}`;
  }

  @Get(':productID')
  getProductID(
    @Param('productID') productID: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `Product direct ${productID} query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }
}
