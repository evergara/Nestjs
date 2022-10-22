import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomsController } from './controllers/customs/customs.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CustomsService } from './services/customs.service';
import { OrdersService } from './services/orders.service';
import { CategoriesService } from './services/categories.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, CustomsController, UsersController, BrandsController],
  providers: [AppService, ProductsService, BrandsService, CustomsService, OrdersService, CategoriesService, UserService],
})
export class AppModule {}
