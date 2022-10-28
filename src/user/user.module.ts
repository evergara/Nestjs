import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users/users.controller";
import { CustomsController } from "./controllers/customs/customs.controller";
import { OrdersService } from "./services/orders.service";
import { OrdersController } from "./controllers/orders/orders.controller";
import { UserService } from "./services/user.service";
import { CustomsService } from "./services/customs.service";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [ProductModule],
  controllers: [OrdersController, CustomsController, UsersController],
  providers: [CustomsService, OrdersService, UserService],
})
export class UserModule {}
