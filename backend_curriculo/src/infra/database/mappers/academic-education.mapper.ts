import { AcademicIdType } from '@dtos/academic-educations.dto';
import { AcademicEducationEntity } from '@entities/academic-educations.entity';
import { AcademicEducations } from '@prisma/client';

export class AcademicEducationMapper {
  static toDomain(raw: AcademicEducations): AcademicEducationEntity {
    return new AcademicEducationEntity(
      raw.title,
      raw.university,
      raw.description,
      raw.date_init,
      raw.date_end,
      raw.user_id,
      raw.createdAt,
      raw.updatedAt,
      raw.id,
    );
  }

  static toResponse(domain: AcademicEducationEntity): AcademicIdType {
    return {
      id: domain.id,
      title: domain.title,
      university: domain.university,
      description: domain.description,
      dateInit: domain.dateInit,
      dateEnd: domain.dateEnd,
      userId: domain.userId,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt,
    };
  }
}
