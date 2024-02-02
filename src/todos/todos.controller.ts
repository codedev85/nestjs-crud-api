import { Controller ,Body, Post ,Get , Put, Param ,Query} from "@nestjs/common";
import { TodoService } from "./todos.service";

@Controller('todos')
export class TodosController{

   constructor(private readonly todoService : TodoService){}

   @Post()
   create(@Body() dto : {title : string}){
      return this.todoService.create(dto);
   }

   @Get()
   findMany(){
      return this.todoService.findMany();
   }

   @Put(':id')

   update(@Param('id') id : number , @Query('newp') newP : string ,@Body() dto :{title : string}){

      return  newP;

      return this.todoService.update(id,dto);

   }
}