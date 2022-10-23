import { Controller, Get } from "@nestjs/common";
import { Param, Query } from "@nestjs/common/decorators";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("new")
  newEndPoint() {
    return "It is new";
  }

  @Get("/ruta/")
  hello() {
    return "with /sas/";
  }
}
