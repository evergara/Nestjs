import { Module } from "@nestjs/common";
import { HttpModule, HttpService } from "@nestjs/axios";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";

const API_KEY = "12345634";
const API_KEY_PROD = "PROD1212121SA";

@Module({
  imports: [ProductModule, UserModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "API_KEY",
      useValue: process.env.NODE_END === "prod" ? API_KEY_PROD : API_KEY,
    },
    {
      provide: "TASKS",
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get("https://jsonplaceholder.typicode.com/todos")
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
