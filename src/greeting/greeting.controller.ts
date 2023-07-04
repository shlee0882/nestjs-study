import { Controller, Get } from '@nestjs/common';

@Controller('greeting')
export class GreetingController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
