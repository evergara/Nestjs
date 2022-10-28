import { BaseModel } from "src/common/entities/base.model";
import { Product } from "src/product/entities/product.interface";
import { User } from "./user.interface";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Order extends BaseModel {
  date: Date;
  user: User;
  products: Product[];
}
