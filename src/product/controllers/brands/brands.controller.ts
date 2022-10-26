import { Controller, Get, Param, Query, ParseUUIDPipe } from "@nestjs/common";
import { Body, Post } from "@nestjs/common/decorators";
import {
  Delete,
  Put,
} from "@nestjs/common/decorators/http/request-mapping.decorator";
import { CreatedBrandDTO, UpdatedBranDTO } from "src/product/dtos/brand.dto";
import { BrandsService } from "src/product/services/brands.service";

@Controller("brands")
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getAll(
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return this.brandsService.getAll();
  }

  @Get(":brandID")
  getOne(@Param("brandID", ParseUUIDPipe) brandID: string) {
    return this.brandsService.findOne(brandID);
  }

  @Post()
  create(@Body() payload: CreatedBrandDTO) {
    return this.brandsService.create(payload);
  }

  @Put(":brandID")
  updated(
    @Param("brandID", ParseUUIDPipe) brandID: string,
    @Body() payload: UpdatedBranDTO
  ) {
    return this.brandsService.updated(brandID, payload);
  }
  @Delete(":brandID")
  delete(@Param("brandID", ParseUUIDPipe) brandID: string) {
    return this.brandsService.delete(brandID);
  }
}
