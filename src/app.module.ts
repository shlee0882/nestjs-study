import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the config global
      envFilePath: '.env', // point to .env in root directory
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // entities: [Task],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TaskModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
