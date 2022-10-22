import { Injectable } from "@nestjs/common";
import { CreatedProductDTO, UpdatedProductDTO } from "src/entities/product.dto";
import { Product } from "src/entities/product.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class ProductsService {
  private products: Product[];

  constructor() {
    this.products = [
      {
        id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "Product 1",
        description: "bla bla",
        price: 1000,
        stock: 100,
        image: "",
      },
    ];
  }

  findAll() {
    return this.products;
  }

  findOne(uuid: Product["id"]): Product {
    return this.products.find((product) => product.id === uuid);
  }

  create(payload: CreatedProductDTO): Product {
    const product: Product = {
      id: uuidv4(),
      createdAt: new Date(),
      ...payload,
    };
    this.products.push(product);
    return product;
  }

  delete(uuid: Product["id"]) {
    const product = this.findOne(uuid);
    if (product) {
      const index = this.products.findIndex((product) => product.id === uuid);
      this.products.splice(index, 1);
    }
  }

  update(uuid: Product["id"], changes: UpdatedProductDTO): Product {
    const product = this.findOne(uuid);
    if (product) {
      const index = this.products.findIndex((product) => product.id === uuid);
      const prevData = this.products[index];
      this.products[index] = {
        ...prevData,
        ...changes,
      };
      return this.products[index];
    }
    return null;
  }
}
