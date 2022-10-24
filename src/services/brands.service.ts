import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatedBrandDTO, UpdatedBranDTO } from "src/dtos/brand.dto";
import { Brand } from "src/entities/brand.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class BrandsService {
  private brands: Brand[];

  constructor() {
    this.brands = [];
  }

  getAll(): Brand[] {
    return this.brands;
  }

  findOne(brandID: string): Brand {
    const brand = this.brands.find((brand) => brand.id === brandID);
    if (!brand) {
      throw new NotFoundException(`Brand #${brandID} not found`);
    }
    return brand;
  }

  create(payload: CreatedBrandDTO): Brand {
    const brand: Brand = {
      id: uuidv4(),
      createdAt: new Date(),
      ...payload,
    };

    this.brands.push(brand);
    return brand;
  }

  updated(brandID: string, payload: UpdatedBranDTO): Brand {
    const brand = this.findOne(brandID);
    if (!brand) {
      throw new NotFoundException(`Brand #${brandID} not found`);
    }
    const index = this.brands.findIndex((brand) => brand.id === brandID);
    const prevBrand = this.brands[index];
    this.brands[index] = {
      ...prevBrand,
      ...payload,
    };

    return this.brands[index];
  }

  delete(brandID: string) {
    const brand = this.findOne(brandID);
    if (brand) {
      const index = this.brands.findIndex((brand) => brand.id === brandID);
      this.brands.splice(index, 1);
      return true;
    }
  }
}
