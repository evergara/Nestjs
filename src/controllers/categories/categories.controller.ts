import { Controller, Get, Param } from "@nestjs/common";

@Controller("categories")
export class CategoriesController {
  @Get(":categoryID/products/:productID")
  getCategoryParam(@Param() params: any) {
    return `Categories ${params.categoryID} por product ${params.productID} params`;
  }

  @Get(":categoryID/products/:productID")
  getCategory(
    @Param("categoryID") categoryID: string,
    @Param("productID") productID: string
  ) {
    return `Category; ${categoryID} por product ${productID} Direct`;
  }
}
