import { IdVerifyType } from './../../application/dtos/id-verify.dto';
import { Injectable } from '@nestjs/common';
import { ISocialMediasRepository } from './interfaces/social-medias-repository.interface';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { SocialMediasEntity } from '@entities/social-medias.entity';
import { SocialMediasMapper } from '@mappers/social-medias.mapper';
import { SocialMediaType } from '@dtos/social-media.dto';

@Injectable()
export class SocialMediasRepository implements ISocialMediasRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(id: string): Promise<SocialMediasEntity> {
    const socialMedia = await this.prisma.socialMedias.findFirst({
      where: { id },
    });

    if (!socialMedia) {
      throw new Error('Social media not found');
    }

    return SocialMediasMapper.toDomain(socialMedia);
  }

  async findAll(): Promise<SocialMediasEntity[]> {
    const socialMedias = await this.prisma.socialMedias.findMany();

    return socialMedias.flatMap((socialMedia) => {
      return SocialMediasMapper.toDomain(socialMedia);
    });
  }

  async create(socialMedia: SocialMediaType): Promise<SocialMediasEntity> {
    const socialMediaCReated = await this.prisma.socialMedias.create({
      data: {
        name: socialMedia.name,
        slug: socialMedia.slug,
        url: socialMedia.url,
        contacts_id: socialMedia.contactId,
      },
    });

    return SocialMediasMapper.toDomain(socialMediaCReated);
  }

  async update(
    id: IdVerifyType,
    socialMedia: SocialMediaType,
  ): Promise<SocialMediasEntity> {
    const findSocialMedia = await this.prisma.socialMedias.findFirst({
      where: { id },
    });

    if (!findSocialMedia) {
      throw new Error('Social media not found');
    }

    const socialMediaUpdated = await this.prisma.socialMedias.update({
      where: { id: id },
      data: {
        name: socialMedia.name,
        slug: socialMedia.slug,
        url: socialMedia.url,
      },
    });

    return SocialMediasMapper.toDomain(socialMediaUpdated);
  }
}
