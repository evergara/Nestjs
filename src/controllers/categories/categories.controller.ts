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
import { CategoriesService } from "src/services/categories.service";
import { CreatedCategoryDTO } from "./../../dtos/category.dto";
import { UpdateCategoryDTO } from "../../dtos/category.dto";

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
