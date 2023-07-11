import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }
}
