import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from "@nestjs/common";
import {
  CreatedCategoryDTO,
  UpdateCategoryDTO,
} from "src/product/dtos/category.dto";
import { CategoriesService } from "src/product/services/categories.service";

@Controller("categories")
export class CategoriesController {
  constructor(private categoryServices: CategoriesService) {}

  @Get()
  getAll() {
    return this.categoryServices.getAll();
  }

  @Get(":uuid")
  findOne(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return this.categoryServices.findOne(uuid);
  }

  @Post()
  create(@Body() payload: CreatedCategoryDTO) {
    return this.categoryServices.create(payload);
  }

  @Put(":uuid")
  updated(@Param("uuid") uuid: string, @Body() payload: UpdateCategoryDTO) {
    return this.categoryServices.updated(uuid, payload);
  }

  @Delete(":uuid")
  delete(@Param("uuid") uuid: string) {
    return this.categoryServices.delete(uuid);
  }
}
