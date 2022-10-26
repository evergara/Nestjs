import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from "class-validator";
import { PartialType, OmitType } from "@nestjs/mapped-types";
import { Product } from "../entities/product.interface";

//export type CreatedProductDTO = Omit<Product, 'id' | 'url'>;
export class CreatedProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
//export interface UpdatedProductDTO extends Pick<Product,  'id' | 'name' | 'description' | 'price' | 'stock' > {};
//export interface UpdatedProductDTO extends Partial<CreatedProductDTO> {}
export type FindProductDTO = Readonly<Partial<Product>>;
export class UpdatedProductDTO extends PartialType(
  OmitType(CreatedProductDTO, ["name"])
) {}
