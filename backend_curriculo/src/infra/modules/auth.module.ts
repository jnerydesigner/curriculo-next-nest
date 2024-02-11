//auth.module.ts
import { Module } from '@nestjs/common';
import { CurriculoModule } from './curriculo.module';
import { AuthService } from '@services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { AuthController } from '@controllers/auth/auth.controller';

@Module({
  imports: [
    CurriculoModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
