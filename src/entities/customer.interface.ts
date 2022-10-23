import { BaseModel } from "./base.model";

export interface Customer extends BaseModel {
  name: string;
  lastName: string;
  phone: string;
}
