import { PersonalDataIdType, PersonalDataType } from '@dtos/personal-data.dto';
import { PersonalDatasEntity } from '@entities/personal_datas.entity';
import { PersonalData } from '@prisma/client';
import { randomUUID } from 'node:crypto';

export class PersonalDataMapper {
  static toDomain(raw: PersonalData): PersonalDatasEntity {
    return new PersonalDatasEntity(
      raw.fullname,
      raw.document,
      raw.birthday,
      raw.user_id,
      raw.avatar_url,
      raw.id,
      raw.profession,
    );
  }

  static toResponse(raw: PersonalDatasEntity): PersonalDataIdType {
    return {
      id: raw.id,
      fullname: raw.fullname,
      document: raw.document,
      birthday: raw.birthday,
      userId: raw.userId,
      avatarUrl: raw.avatarUrl,
      profession: raw.profession,
    };
  }

  static toPersistence(raw: PersonalDataType): PersonalData {
    return {
      id: randomUUID(),
      fullname: raw.fullname,
      document: raw.document,
      birthday: raw.birthday,
      user_id: raw.userId,
      avatar_url: raw.avatarUrl,
      profession: raw.profession,
    };
  }
}
