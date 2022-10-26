import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { CreatedCategoryDTO, UpdateCategoryDTO } from "../dtos/category.dto";
import { Category } from "../entities/category.interface";

@Injectable()
export class CategoriesService {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  getAll(): Category[] {
    return this.categories;
  }
  findOne(uuid: string): Category {
    const category = this.categories.find((category) => category.id === uuid);
    if (!category) {
      throw new NotFoundException(`Category #${uuid} not found`);
    }
    return category;
  }

  create(payload: CreatedCategoryDTO): Category {
    const category: Category = {
      id: uuidv4(),
      createdAt: new Date(),
      ...payload,
    };

    this.categories.push(category);
    return category;
  }

  updated(uuid: string, payload: UpdateCategoryDTO): Category {
    const category = this.findOne(uuid);
    if (category) {
      const index = this.categories.findIndex(
        (category) => category.id === uuid
      );
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
  }

  delete(uuid: string) {
    const category = this.findOne(uuid);
    if (category) {
      const index = this.categories.findIndex(
        (category) => category.id === uuid
      );
      this.categories.splice(index, 1);
      return true;
    }
  }
}
