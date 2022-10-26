import { BaseModel } from "src/common/entities/base.model";

export interface Customer extends BaseModel {
  name: string;
  lastName: string;
  phone: string;
}
