import { FileAvatarBucketResponseDTO } from '@dtos/file-avatar-bucket-response.dto';
import { IdVerifyDTO, IdVerifyType } from '@dtos/id-verify.dto';
import { ImageFileDTO, ImageResponseDTO } from '@dtos/image-upload.dto';
import multerConfig from '@helpers/multer-config';

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3ConfigProvider } from '@providers/s3.provider';
import { UsersService } from '@services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':userId')
  findUser(@Param('userId') userId: IdVerifyType) {
    const idVerifyParsed = IdVerifyDTO.parse(userId);
    return this.usersService.findUser(idVerifyParsed);
  }

  @Get('find/:username')
  find(@Param('username') username: string) {
    return this.usersService.find(username);
  }

  @Post('/upload/avatar/:userId')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('userId') userId: IdVerifyType,
  ) {
    return this.usersService.uploadAvatar(file, userId);
  }

  @Patch('/:userId/bio')
  updateBio(
    @Param('userId') userId: IdVerifyType,
    @Body() body: { bio: string },
  ) {
    const idVerifyParsed = IdVerifyDTO.parse(userId);
    return this.usersService.updateBio(idVerifyParsed, body.bio);
  }
}
