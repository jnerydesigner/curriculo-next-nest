import { ProfessionalExperienceDescriptionEntity } from '@entities/professiona-experiences-description.entity';
import { ProfessionalExperienceEntity } from '@entities/professional-experiencies.entity';
import {
  ProfessionalExperiences,
  Prisma,
  ProfessionalExperiencesDescription,
} from '@prisma/client';
import {
  ProfessionalExperienceDescriptionUpdateType,
  ProfessionalExperienceDescriptionWithIdType,
} from '@dtos/professional-experience.dto';

type ProfessionalExperienceWithRelations =
  Prisma.ProfessionalExperiencesGetPayload<{
    include: {
      ProfessionalExperiencesDescription: true;
    };
  }>;

export class ProfessionalExperiencesMapper {
  static toDomain(
    raw: ProfessionalExperienceWithRelations,
  ): ProfessionalExperienceEntity {
    const professionalExperienceDescriptions =
      raw.ProfessionalExperiencesDescription.map((description) => {
        return new ProfessionalExperienceDescriptionEntity(
          description.id,
          description.description,
          description.professional_experiences_id,
          description.user_id,
        );
      });

    const professionalExperience = new ProfessionalExperienceEntity(
      raw.title,
      raw.company,
      new Date(raw.date_init),
      new Date(raw.date_end),
      raw.is_actual_job,
      raw.user_id,
      raw.id,
      professionalExperienceDescriptions,
    );

    return professionalExperience;
  }

  static toPersistence(professionalExperience: ProfessionalExperienceEntity) {
    return {
      id: professionalExperience.id,
      title: professionalExperience.title,
      company: professionalExperience.company,
      dateInit: professionalExperience.dateInit,
      dateEnd: professionalExperience.dateEnd,
      isActualJob: professionalExperience.isActualJob,
      userId: professionalExperience.userId,
    };
  }

  static toDomainDescription(
    raw: ProfessionalExperiencesDescription,
  ): ProfessionalExperienceDescriptionEntity {
    return new ProfessionalExperienceDescriptionEntity(
      raw.id,
      raw.description,
      raw.professional_experiences_id,
      raw.user_id,
    );
  }

  static toResponseDescription(
    raw: ProfessionalExperienceDescriptionEntity,
  ): ProfessionalExperienceDescriptionUpdateType {
    return {
      id: raw.id,
      description: raw.description,
      professionalExperiencesId: raw.professionalExperiencesId,
      userId: raw.userId,
    };
  }

  static toResponse(
    raw: ProfessionalExperienceWithRelations,
  ): ProfessionalExperienceDescriptionWithIdType {
    return {
      id: raw.id,
      title: raw.title,
      company: raw.company,
      dateInit: raw.date_init,
      dateEnd: raw.date_end,
      isActualJob: raw.is_actual_job,
      userId: raw.user_id,
      description: raw.ProfessionalExperiencesDescription.map((description) => {
        return {
          id: description.id,
          description: description.description,
          userId: description.user_id,
          professionalExperiencesId: description.professional_experiences_id,
        };
      }),
    };
  }
}
