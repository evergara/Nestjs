import { Controller, Get, Query } from "@nestjs/common";

@Controller("orders")
export class OrdersController {
  @Get()
  getOrders(
    @Query("limit") limit = 100,
    @Query("offset") offset = 50,
    @Query("brand") brand: string
  ) {
    return `Orders general query limit => ${limit} offset: => ${offset}  brand: => ${brand}`;
  }
}
