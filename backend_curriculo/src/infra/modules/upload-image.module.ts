import { Module } from '@nestjs/common';
import { UploadImageService } from '@services/upload-image.service';

@Module({
  controllers: [],
  providers: [UploadImageService],
  exports: [UploadImageService],
})
export class UploadImageModule {}
