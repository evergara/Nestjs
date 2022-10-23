import { BaseModel } from "./base.model";

export interface Product extends BaseModel {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}
