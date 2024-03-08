/* eslint-disable @typescript-eslint/ban-types */
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

type ProfessionalExperienceNotRelations =
  Prisma.ProfessionalExperiencesGetPayload<{}>;

export class ProfessionalExperiencesMapper {
  static toDomainWithRelations(
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

  static toDomain(
    raw: ProfessionalExperienceNotRelations,
  ): ProfessionalExperienceEntity {
    const professionalExperience = new ProfessionalExperienceEntity(
      raw.title,
      raw.company,
      new Date(raw.date_init),
      new Date(raw.date_end),
      raw.is_actual_job,
      raw.user_id,
      raw.id,
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
    const entity = new ProfessionalExperienceDescriptionEntity(
      raw.description,
      raw.id,
      raw.professional_experiences_id,
      raw.user_id,
    );
    return entity;
  }

  static toResponseDescription(
    raw: ProfessionalExperienceDescriptionEntity,
  ): ProfessionalExperienceDescriptionUpdateType {
    console.log('raw', raw);
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
      descriptions: raw.ProfessionalExperiencesDescription.map(
        (description) => {
          return {
            id: description.id,
            description: description.description,
            userId: description.user_id,
            professionalExperiencesId: description.professional_experiences_id,
          };
        },
      ),
    };
  }

  static toResponseNew(raw: any): ProfessionalExperienceTypeMapper {
    return {
      id: raw.id,
      title: raw.title,
      company: raw.company,
      dateInit: raw.date_init,
      dateEnd: raw.date_end,
      isActualJob: raw.is_actual_job,
      userId: raw.user_id,
      descriptions: raw.ProfessionalExperiencesDescription.map(
        (description) => {
          return {
            id: description.id,
            description: description.description,
            professionalExperiencesId: description.professional_experiences_id,
          };
        },
      ),
    };
  }

  static toResponseTrue(
    raw: ProfessionalExperienceEntity,
  ): ProfessionalExperienceDescriptionWithIdType {
    return {
      id: raw.id,
      title: raw.title,
      company: raw.company,
      dateInit: raw.dateInit,
      dateEnd: raw.dateEnd,
      isActualJob: raw.isActualJob,
      userId: raw.userId,
      descriptions: raw.descriptions.map((description) => {
        return {
          id: description.id,
          description: description.description,
          userId: description.userId,
          professionalExperiencesId: description.professionalExperiencesId,
        };
      }),
    };
  }
}

interface DescriptionType {
  id: string;
  description: string;
  professionalExperiencesId: string;
}

export interface ProfessionalExperienceTypeMapper {
  id: string;
  title: string;
  company: string;
  dateInit: Date;
  dateEnd: Date;
  isActualJob: boolean;
  userId: string;
  descriptions: DescriptionType[];
}
