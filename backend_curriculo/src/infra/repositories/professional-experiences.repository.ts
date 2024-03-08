import { Injectable, Logger } from '@nestjs/common';
import { IProfessionalExperiencesRepository } from './interfaces/professional-experiences-repository.interface';
import { ProfessionalExperienceEntity } from '@entities/professional-experiencies.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { ProfessionalExperiencesMapper } from '@mappers/professional-experiences.mapper';
import {
  ProfessionalExperienceDescriptionType,
  ProfessionalExperienceDescriptionWithIdType,
  ProfessionalExperienceType,
} from '@dtos/professional-experience.dto';
import { ProfessionalExperienceDescriptionEntity } from '@entities/professiona-experiences-description.entity';
import { ProfessionalExperiences, Prisma } from '@prisma/client';

@Injectable()
export class ProfessionalExperienceRepository
  implements IProfessionalExperiencesRepository
{
  private logger: Logger;
  constructor(private readonly prisma: PrismaService) {
    this.logger = new Logger(ProfessionalExperienceRepository.name);
  }

  async findAll(): Promise<ProfessionalExperienceDescriptionWithIdType[]> {
    const professionalExperience =
      await this.prisma.professionalExperiences.findMany({
        include: {
          ProfessionalExperiencesDescription: true,
        },
      });

    return professionalExperience.flatMap((item) => {
      return ProfessionalExperiencesMapper.toResponse(item);
    });
  }
  async create(
    professionalExperience: ProfessionalExperienceType,
  ): Promise<any> {
    const professionalExperienceCreated =
      await this.prisma.professionalExperiences.create({
        data: {
          title: professionalExperience.title,
          company: professionalExperience.company,
          date_init: professionalExperience.dateInit,
          date_end: professionalExperience.dateEnd,
          is_actual_job: professionalExperience.isActualJob,
          user_id: professionalExperience.userId,
        },
      });

    return ProfessionalExperiencesMapper.toDomain(
      professionalExperienceCreated,
    );
  }

  async update(
    id: string,
    professionalExperience: ProfessionalExperienceType,
  ): Promise<ProfessionalExperienceEntity> {
    const findProfessionalExperience =
      await this.prisma.professionalExperiences.findUnique({
        where: {
          id,
        },
        include: {
          ProfessionalExperiencesDescription: true,
        },
      });

    if (!findProfessionalExperience) {
      throw new Error('Professional Experience not found');
    }

    const professionalExperienceUpdated =
      await this.prisma.professionalExperiences.update({
        where: {
          id,
        },
        include: {
          ProfessionalExperiencesDescription: true,
        },
        data: {
          title: professionalExperience.title,
          company: professionalExperience.company,
          date_init: professionalExperience.dateInit,
          date_end: professionalExperience.dateEnd,
          is_actual_job: professionalExperience.isActualJob,
          user_id: professionalExperience.userId,
        },
      });

    return ProfessionalExperiencesMapper.toDomain(
      professionalExperienceUpdated,
    );
  }

  findById(id: string): Promise<ProfessionalExperienceEntity> {
    throw new Error('Method not implemented.');
  }
  async findByUserId(userId: string): Promise<
    | Prisma.ProfessionalExperiencesGetPayload<{
        include: {
          ProfessionalExperiencesDescription: true;
        };
      }>[]
    | []
  > {
    const professionalUserExperience =
      await this.prisma.professionalExperiences.findMany({
        where: {
          user_id: userId,
        },
        include: {
          ProfessionalExperiencesDescription: true,
        },
      });

    professionalUserExperience.forEach((experience) => {
      if (experience.ProfessionalExperiencesDescription === null) {
        return [];
      }

      return {
        ...experience,
        description: experience.ProfessionalExperiencesDescription,
      };
    });

    return professionalUserExperience;
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async createDescription(
    description: ProfessionalExperienceDescriptionType,
  ): Promise<ProfessionalExperienceDescriptionEntity> {
    const createDescription =
      await this.prisma.professionalExperiencesDescription.create({
        data: {
          description: description.description,
          professional_experiences_id: description.professionalExperiencesId,
          user_id: description.userId,
        },
      });

    console.log(createDescription);

    return ProfessionalExperiencesMapper.toDomainDescription(createDescription);
  }
}
