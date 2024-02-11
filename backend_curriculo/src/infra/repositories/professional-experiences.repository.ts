import { Injectable } from '@nestjs/common';
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

@Injectable()
export class ProfessionalExperienceRepository
  implements IProfessionalExperiencesRepository
{
  constructor(private readonly prisma: PrismaService) {}

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
    const professionalExperienceDescription =
      await this.prisma.professionalExperiencesDescription.findFirst({
        where: {
          user_id: professionalExperience.userId,
        },
      });

    if (!professionalExperienceDescription) {
      throw new Error('Professional Experience Description not found');
    }

    const professionalExperienceCreated =
      await this.prisma.professionalExperiences.create({
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
  findByUserId(userId: string): Promise<ProfessionalExperienceEntity[]> {
    throw new Error('Method not implemented.');
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

    return ProfessionalExperiencesMapper.toDomainDescription(createDescription);
  }
}
