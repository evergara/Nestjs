import { NotFoundException } from "@nestjs/common/exceptions";
import { Injectable } from "@nestjs/common";
import { CreatedCustomDTO, UpdatedCustomDTO } from "src/user/dtos/custom.dto";
import { Customer } from "src/user/entities/customer.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class CustomsService {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  getAll(): Customer[] {
    return this.customers;
  }

  findOne(uuid: string): Customer {
    const customer = this.customers.find((customer) => customer.id === uuid);
    if (!customer) {
      throw new NotFoundException(`El customer #${uuid} not found`);
    }
    return customer;
  }

  create(payload: CreatedCustomDTO): Customer {
    const customer = {
      id: uuidv4(),
      createdAt: new Date(),
      ...payload,
    };
    this.customers.push(customer);
    return customer;
  }
  updated(uuid: string, payload: UpdatedCustomDTO): Customer {
    const customer = this.findOne(uuid);
    if (customer) {
      const index = this.searchIndex(uuid);
      this.customers[index] = {
        ...customer,
        ...payload,
      };

      return this.customers[index];
    }
  }
  delete(uuid: string) {
    const customer = this.findOne(uuid);
    if (customer) {
      const index = this.searchIndex(uuid);
      this.customers.splice(index, 1);
      return true;
    }
  }

  private searchIndex(uuid: string): number {
    return this.customers.findIndex((customer) => customer.id === uuid);
  }
}
