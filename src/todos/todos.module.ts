import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { TodosController } from "./todos.controller";
import { TodoService } from "./todos.service";
import { SeederModule } from "src/seeder/seeder.module";

@Module({
   imports : [TypeOrmModule.forFeature([Todo])],
   controllers : [TodosController],
   providers : [TodoService]
})
export class TodosModule{}