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
import { UserService } from "./../../services/user.service";
import { ParseUUIDPipe } from "@nestjs/common/pipes/parse-uuid.pipe";
import { CreateUserDto, UpdateUserDto } from "src/user/dtos/user.dto ";

@Controller("users")
export class UsersController {
  constructor(private userServices: UserService) {}

  @Get()
  getAll(
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return this.userServices.getAll();
  }

  @Get(":uuid")
  findOne(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return this.userServices.findOne(uuid);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userServices.create(payload);
  }

  @Put(":uuid")
  updated(
    @Param("uuid", ParseUUIDPipe) uuid: string,
    @Body() payload: UpdateUserDto
  ) {
    return this.userServices.updated(uuid, payload);
  }

  @Delete(":uuid")
  delete(@Param("uuid", ParseUUIDPipe) uuid: string) {
    return this.userServices.delete(uuid);
  }
}
