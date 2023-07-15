// auth.controller.ts
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth API')
@Controller('auth')
export class AuthController {

  @ApiOperation({ summary: 'google login auth' })
  @ApiResponse({ status: 200, description: 'google login auth' })
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @ApiOperation({ summary: 'google login auth callback' })
  @ApiResponse({ status: 200, description: 'google login auth callback' })
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req) {
    // handles the Google OAuth2 callback
    return {
      // return the user information and the access token
      user: req.user,
    };
  }
}
