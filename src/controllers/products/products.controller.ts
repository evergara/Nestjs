import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { ProductsService } from "./../../services/products.service";
import { Controller, Get, Param, Query } from "@nestjs/common";
import { CreatedProductDTO, UpdatedProductDTO } from "src/entities/product.dto";

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
    @Param("productID") productID: string,
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
