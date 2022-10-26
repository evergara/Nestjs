import { Module } from "@nestjs/common";
import { CategoriesController } from "./controllers/categories/categories.controller";
import { ProductsController } from "./controllers/products/products.controller";
import { BrandsController } from "./controllers/brands/brands.controller";
import { ProductsService } from "./services/products.service";
import { BrandsService } from "./services/brands.service";
import { CategoriesService } from "./services/categories.service";

@Module({
  imports: [],
  controllers: [CategoriesController, ProductsController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
})
export class ProductModule {}
