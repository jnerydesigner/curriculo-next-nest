import { IdVerifyType } from './../dtos/id-verify.dto';
import { SocialMediaType } from '@dtos/social-media.dto';
import { SocialMediasMapper } from '@mappers/social-medias.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { ISocialMediasRepository } from '@repositories/interfaces/social-medias-repository.interface';
import { GenerateSlug } from 'src/infra/helpers/generate-slug';

@Injectable()
export class SocialMediasService {
  constructor(
    @Inject('SOCIAL_MEDIAS_REPOSITORY')
    private readonly socialMediasRepository: ISocialMediasRepository,
  ) {}
  async findAll() {
    return this.socialMediasRepository.findAll();
  }

  async create(socialMedia: SocialMediaType) {
    const socialMediaRequest = {
      ...socialMedia,
      slug: GenerateSlug.execute(socialMedia.name),
    };
    return this.socialMediasRepository.create(socialMediaRequest);
  }

  async update(id: IdVerifyType, socialMedias: SocialMediaType) {
    const socialMediaRequest = {
      ...socialMedias,
      slug: GenerateSlug.execute(socialMedias.name),
    };

    return SocialMediasMapper.toResponse(
      await this.socialMediasRepository.update(id, socialMediaRequest),
    );
  }

  async findOne(id: string) {
    const socialMedia = await this.socialMediasRepository.findOne(id);

    return SocialMediasMapper.toResponse(socialMedia);
  }
}
