import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { Controller, Get, Param, ParseUUIDPipe, Query } from "@nestjs/common";
import { ProductsService } from "src/product/services/products.service";
import {
  CreatedProductDTO,
  UpdatedProductDTO,
} from "src/product/dtos/product.dto";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return this.productsService.findAll();
  }

  @Get("filter")
  getProductFilter() {
    return `Product filter`;
  }

  @Get(":productID")
  getOne(
    @Param("productID", ParseUUIDPipe) productID: string,
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return this.productsService.findOne(productID);
  }

  @Post()
  created(@Body() payload: CreatedProductDTO) {
    return this.productsService.create(payload);
  }
  @Put(":productID")
  updated(
    @Param("productID") productID: string,
    @Body() payload: UpdatedProductDTO
  ) {
    return this.productsService.update(productID, payload);
  }

  @Delete(":productID")
  delete(@Param("productID") productID: string) {
    return this.productsService.delete(productID);
  }
}
