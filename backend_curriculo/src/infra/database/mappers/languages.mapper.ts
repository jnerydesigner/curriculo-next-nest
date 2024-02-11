import { LanguagesIdType } from '@dtos/languages.dto';
import { LanguagesEntity } from '@entities/languages.entity';
import { Languages } from '@prisma/client';

export class LanguagesMapper {
  static toDomain(raw: Languages): LanguagesEntity {
    return new LanguagesEntity(
      raw.name,
      raw.slug,
      raw.user_id,
      raw.stars,
      raw.id,
    );
  }

  static toResponse(language: LanguagesEntity): LanguagesIdType {
    return {
      id: language.id,
      name: language.name,
      slug: language.slug,
      stars: language.stars,
      userId: language.userId,
    };
  }
}
