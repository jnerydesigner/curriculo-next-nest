import { IdVerifyType } from '@dtos/id-verify.dto';
import { SocialMediaType } from '@dtos/social-media.dto';
import { SocialMediasEntity } from '@entities/social-medias.entity';

export interface ISocialMediasRepository {
  findAll(): Promise<SocialMediasEntity[]>;
  findOne(id: string): Promise<SocialMediasEntity>;
  create(socialMedia: SocialMediaType): Promise<SocialMediasEntity>;
  update(
    id: IdVerifyType,
    socialMedia: SocialMediaType,
  ): Promise<SocialMediasEntity>;
}
