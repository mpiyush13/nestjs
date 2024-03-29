import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './Dto/createTaskDto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id:string):Task{
    return this.taskService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id:string):void {
    this.taskService.deleteTaskById(id);
  }
  @Patch('/:id/status')
  updateTask(@Param('id') id:string,@Body('status') status:TaskStatus):Task{
    return this.taskService.updateTask(id,status);
  }
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto):Task {
    return this.taskService.createTask(createTaskDto);
  }
}
