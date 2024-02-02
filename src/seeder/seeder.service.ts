import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "../todos/todo.entity";

import { Repository } from "typeorm";

@Injectable()

export class SeederService {

   constructor(
      @InjectRepository(Todo)
   private readonly todoRepository : Repository <Todo> ){}


  async seedTodos() {
   const todosToSeed = [
     { title: 'user1'},
     { title: 'user2' },
     // Add more users or entities as needed
   ];

   for (const todoData of todosToSeed) {
     const todo = this.todoRepository.create(todoData);
     await this.todoRepository.save(todo);
   }
 }
}