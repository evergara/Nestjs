import { BaseModel } from "src/common/entities/base.model";

export interface User extends BaseModel {
  email: string;
  password: string;
  role: string;
}
