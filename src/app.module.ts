import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingController } from './greeting/greeting.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'Your Google Cloud SQL IP',
      port: 3306,
      username: 'Your Google Cloud SQL Username',
      password: 'Your Google Cloud SQL Password',
      database: 'Your Google Cloud SQL Database Name',
      entities: [Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task]), // if you have a TaskModule, this would go there
  ],
  controllers: [AppController, GreetingController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}