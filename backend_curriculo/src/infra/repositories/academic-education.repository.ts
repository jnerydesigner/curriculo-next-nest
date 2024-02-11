import { Injectable } from '@nestjs/common';
import { IAcademicEducationRepository } from './interfaces/academic-education-repository.interface';
import { AcademicEducationEntity } from '@entities/academic-educations.entity';
import { AcademicType } from '@dtos/academic-educations.dto';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { AcademicEducationMapper } from '@mappers/academic-education.mapper';

@Injectable()
export class AcademicEducationRepository
  implements IAcademicEducationRepository
{
  constructor(private readonly prisma: PrismaService) {}
  async find(userId: string): Promise<AcademicEducationEntity[]> {
    const academicEducations = await this.prisma.academicEducations.findMany({
      where: {
        user_id: userId,
      },
    });

    return academicEducations.map((academicEducation) => {
      return AcademicEducationMapper.toDomain(academicEducation);
    });
  }
  async create(request: AcademicType) {
    const academicCreated = await this.prisma.academicEducations.create({
      data: {
        title: request.title,
        university: request.university,
        description: request.description,
        date_init: request.dateInit,
        date_end: request.dateEnd,
        user_id: request.userId,
      },
    });

    return AcademicEducationMapper.toDomain(academicCreated);
  }
  async update(
    id: string,
    request: AcademicType,
  ): Promise<AcademicEducationEntity> {
    const academicSearch = this.prisma.academicEducations.findUnique({
      where: {
        id,
      },
    });

    if (!academicSearch) {
      throw new Error('Academic not found');
    }

    const academicUpdated = await this.prisma.academicEducations.update({
      where: {
        id,
      },
      data: {
        title: request.title,
        university: request.university,
        description: request.description,
        date_init: request.dateInit,
        date_end: request.dateEnd,
        user_id: request.userId,
      },
    });

    return AcademicEducationMapper.toDomain(academicUpdated);
  }
}
