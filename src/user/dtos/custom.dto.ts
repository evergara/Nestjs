import { IsString, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { Customer } from "src/user/entities/customer.interface";

export class CreatedCustomDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}
export type FindCustomDTO = Readonly<Partial<Customer>>;
export class UpdatedCustomDTO extends PartialType(CreatedCustomDTO) {}
