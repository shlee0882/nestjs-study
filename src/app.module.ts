import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingController } from './greeting/greeting.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [],
  controllers: [AppController, GreetingController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
