import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
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

  @Get('/product/:productID')
  getProduct(@Param() Params: any) {
    return `Product params ${Params.productID}`;
  }

  @Get('/products/:productID')
  getProductID(@Param('productID') productID: string) {
    return `Product direct ${productID}`;
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
