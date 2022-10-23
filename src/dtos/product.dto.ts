import { Product } from "../entities/product.interface";

//export type CreatedProductDTO = Omit<Product, 'id' | 'url'>;
export interface CreatedProductDTO extends Omit<Product, "id" | "url"> {}
//export interface UpdatedProductDTO extends Pick<Product,  'id' | 'name' | 'description' | 'price' | 'stock' > {};
export interface UpdatedProductDTO extends Partial<CreatedProductDTO> {}
export interface FindProductDTO extends Readonly<Partial<Product>> {}
