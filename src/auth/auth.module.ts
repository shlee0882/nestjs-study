import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { GoogleStrategy } from 'src/strategies/google.strategy';
import { AuthController } from './auth.contoller';
@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
