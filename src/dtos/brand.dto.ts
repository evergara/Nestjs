import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from "class-validator";
import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { Brand } from "src/entities/brand.interface";

//export type CreatedProductDTO = Omit<Product, 'id' | 'url'>;
export class CreatedBrandDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}
//export interface UpdatedProductDTO extends Pick<Product,  'id' | 'name' | 'description' | 'price' | 'stock' > {};
//export interface UpdatedProductDTO extends Partial<CreatedProductDTO> {}
export type FindBrandDTO = Readonly<Partial<Brand>>;
export class UpdatedBranDTO extends PartialType(CreatedBrandDTO) {}
/**
export class UpdatedBranDTO extends PickType(CreatedBrandDTO, [
  "name",
  "image",
] as const) {}
 */
