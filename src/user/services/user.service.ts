import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/user/dtos/user.dto ";
import { User } from "src/user/entities/user.interface";
import { NotFoundException } from "@nestjs/common/exceptions";
import { v4 as uuidv4 } from "uuid";
import { Order } from "../entities/order.interface";
import { ProductsService } from "src/product/services/products.service";

@Injectable()
export class UserService {
  private users: User[];

  constructor(private productService: ProductsService) {
    this.users = [];
  }

  getAll(): User[] {
    return this.users;
  }

  findOne(uuid: string): User {
    const user = this.users.find((user) => user.id === uuid);
    if (!user) {
      throw new NotFoundException(`User with #${uuid} not found`);
    }
    return user;
  }
  create(payload: CreateUserDto): User {
    const user = {
      id: uuidv4(),
      createdAt: new Date(),
      ...payload,
    };

    this.users.push(user);
    return user;
  }

  updated(uuid: string, payload: UpdateUserDto): User {
    const user = this.findOne(uuid);
    if (user) {
      const index = this.searchIndex(uuid);
      this.users[index] = {
        ...user,
        ...payload,
      };

      return this.users[index];
    }
  }

  delete(uuid: string) {
    const user = this.findOne(uuid);
    if (user) {
      const index = this.searchIndex(uuid);
      this.users.splice(index, 1);
      return true;
    }
  }

  private searchIndex(uuid: string): number {
    return this.users.findIndex((customer) => customer.id === uuid);
  }

  getOrderByUser(uuid: string): Order {
    const user = this.findOne(uuid);

    return {
      id: uuidv4(),
      createdAt: new Date(),
      date: new Date(),
      user,
      products: this.productService.findAll(),
    };
  }
}
