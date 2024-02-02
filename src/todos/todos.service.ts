import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodoService{
   constructor(
      @InjectRepository(Todo)
      private readonly todoRepository : Repository<Todo>
   ){}


   async create(dto : {title : string}){

    const todo =  this.todoRepository.create(dto)

    return await  this.todoRepository.save(todo);

   }


    findMany(){
      return this.todoRepository.find();
    }

   async update(id : number , dto : {title : string}){

      const todo = await this.todoRepository.update(id, dto );

      return todo;
   
    }
}