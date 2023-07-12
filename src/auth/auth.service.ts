import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(googleId: string, googleToken: string): Promise<any> {
    // Here you can add logic to validate the user
    // For example, you might check if the user with this Google ID already exists in your database
    // If they do, you might want to update their Google Token
    // If they don't, you might want to create a new user
  }
}
