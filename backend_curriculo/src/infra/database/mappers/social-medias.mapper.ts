import { SocialMediaIdType } from '@dtos/social-media.dto';
import { SocialMediasEntity } from '@entities/social-medias.entity';
import { SocialMedias } from '@prisma/client';

export class SocialMediasMapper {
  static toDomain(raw: SocialMedias): SocialMediasEntity {
    return new SocialMediasEntity(
      raw.name,
      raw.slug,
      raw.url,
      raw.contacts_id,
      raw.id,
    );
  }

  static toPersistence(socialMedia: SocialMediasEntity): SocialMedias {
    return {
      id: socialMedia.id,
      name: socialMedia.name,
      slug: socialMedia.slug,
      url: socialMedia.url,
      contacts_id: socialMedia.contactId,
    };
  }

  static toResponse(socialMedia: SocialMediasEntity): SocialMediaIdType {
    return {
      id: socialMedia.id,
      name: socialMedia.name,
      slug: socialMedia.slug,
      url: socialMedia.url,
      contactId: socialMedia.contactId,
    };
  }
}
