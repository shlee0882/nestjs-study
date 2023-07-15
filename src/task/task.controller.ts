import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('task API')
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @ApiOperation({ summary: 'Retrieve a list of task.' })
  @ApiResponse({ status: 200, description: 'List of task.' })
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @ApiOperation({ summary: 'Create an task.' })
  @ApiResponse({ status: 201, description: 'The task has been successfully created.' })
  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }
}
