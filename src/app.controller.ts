import { Controller, Get } from '@nestjs/common';
import { Param, Query } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndPoint() {
    return 'It is new';
  }

  @Get('/ruta/')
  hello() {
    return 'with /sas/';
  }

  @Get('/product/filter')
  getProductFilter() {
    return `Product filter`;
  }

  @Get('/product/:productID')
  getProduct(@Param() Params: any, @Query() queries: any) {
    const { limit, offset } = queries;
    return `Product params ${Params.productID} query_ limit => ${limit} offset: => ${offset}`;
  }

  @Get('/products/:productID')
  getProductID(
    @Param('productID') productID: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ) {
    return `Product direct ${productID} query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }

  @Get('/category/:categoryID/products/:productID')
  getCategoryParam(@Param() params: any) {
    return `Categories ${params.categoryID} por product ${params.productID} params`;
  }
  @Get('/categories/:categoryID/products/:productID')
  getCategory(
    @Param('categoryID') categoryID: string,
    @Param('productID') productID: string,
  ) {
    return `Category; ${categoryID} por product ${productID} Direct`;
  }
}
