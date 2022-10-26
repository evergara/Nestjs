import { BaseModel } from "src/common/entities/base.model";

export interface Brand extends BaseModel {
  name: string;
  image: string;
}
