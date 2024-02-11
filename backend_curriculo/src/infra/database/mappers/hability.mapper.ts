import { HabilityEntity } from '@entities/hability.entity';
import { Habilities } from '@prisma/client';

export class HabilityMapper {
  static toDomain(raw: Habilities): HabilityEntity {
    return new HabilityEntity(raw.name, raw.slug, raw.value, raw.user_id);
  }

  static toPersistence(hability: HabilityEntity): any {
    return {
      id: hability.id,
      name: hability.name,
      slug: hability.slug,
      user_id: hability.user_id,
      value: hability.value,
    };
  }
}
