import { IdVerifyDTO, IdVerifyType } from '@dtos/id-verify.dto';
import {
  CreateSocialMediaDTO,
  SocialMediaType,
  UpdateSocialMediaDTO,
} from '@dtos/social-media.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SocialMediasService } from '@services/social-medias.service';

@Controller('social-medias')
export class SocialMediasController {
  constructor(private readonly socialMediasService: SocialMediasService) {}

  @Get()
  async findAll() {
    return await this.socialMediasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: IdVerifyType) {
    return this.socialMediasService.findOne(id);
  }

  @Post()
  async create(@Body() socialMedia: SocialMediaType) {
    const socialMediaParse = CreateSocialMediaDTO.parse(socialMedia);
    return await this.socialMediasService.create(socialMediaParse);
  }

  @Patch(':id')
  async update(
    @Body() socialMedia: SocialMediaType,
    @Param('id') id: IdVerifyType,
  ) {
    const idSocialMedia = IdVerifyDTO.parse(id);
    const socialMediaParse = UpdateSocialMediaDTO.parse(socialMedia);
    return await this.socialMediasService.update(
      idSocialMedia,
      socialMediaParse,
    );
  }
}
