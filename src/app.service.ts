import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";

@Injectable()
export class AppService {
  constructor(
    @Inject("API_KEY") private apiKey: string,
    @Inject("TASKS") private tasks: any
  ) {}
  getHello(): string {
    console.log("Mis tareas : ", this.tasks);
    return `Hello World! ${this.apiKey}`;
  }
}
