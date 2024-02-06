import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);

    if (!user) {
      throw new UnauthorizedException();
    }
    const passEncripted = bcrypt.hashSync(pass, 10);

    const compare = bcrypt.compareSync(pass, passEncripted);

    if (!compare) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
