import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ParseUUIDPipe } from "@nestjs/common/pipes/parse-uuid.pipe";
import { CreatedCustomDTO, UpdatedCustomDTO } from "src/dtos/custom.dto";
import { CustomsService } from "../../services/customs.service";

@Controller("customs")
export class CustomsController {
  constructor(private customsService: CustomsService) {}

  @Get()
  getAll(
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return this.customsService.getAll();
  }

  @Get(":uuid")
  findOne(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return this.customsService.findOne(uuid);
  }

  @Post()
  create(@Body() payload: CreatedCustomDTO) {
    return this.customsService.create(payload);
  }

  @Put(":uuid")
  updated(
    @Param("uuid", ParseUUIDPipe) uuid: string,
    @Body() payload: UpdatedCustomDTO
  ) {
    return this.customsService.updated(uuid, payload);
  }

  @Delete(":uuid")
  delete(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return this.customsService.delete(uuid);
  }
}
