// google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-google-oauth20';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async validate(accessToken: string, refreshToken: string, profile: any, done: Function): Promise<any> {
    const { name, emails, photos } = profile;

    const user = await this.userRepository.findOne({ where: { email: emails[0].value } });

    if (user) {
      return done(null, user);
    }

    const newUser = new User();
    newUser.email = emails[0].value;
    newUser.firstName = name.givenName;
    newUser.lastName = name.familyName;
    newUser.picture = photos[0].value;

    const result = await this.userRepository.save(newUser);

    return done(null, result);
  }
}
