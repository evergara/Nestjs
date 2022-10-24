import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from "class-validator";
import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { Category } from "./../entities/category.interface";

//export type CreatedProductDTO = Omit<Product, 'id' | 'url'>;
export class CreatedCategoryDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
//export interface UpdatedProductDTO extends Pick<Product,  'id' | 'name' | 'description' | 'price' | 'stock' > {};
//export interface UpdatedProductDTO extends Partial<CreatedProductDTO> {}
export type FindCategoryDTO = Readonly<Partial<Category>>;
export class UpdateCategoryDTO extends PartialType(CreatedCategoryDTO) {}
/**
export class UpdatedBranDTO extends PickType(CreatedBrandDTO, [
  "name",
  "image",
] as const) {}
 */
