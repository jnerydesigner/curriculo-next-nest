import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { CurriculoModule } from './infra/modules/curriculo.module';
import { AuthModule } from './infra/modules/auth.module';
import { UploadImageModule } from './infra/modules/upload-image.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CurriculoModule,
    AuthModule,
    UploadImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
