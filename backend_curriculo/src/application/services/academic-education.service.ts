import { AcademicType } from '@dtos/academic-educations.dto';
import { AcademicEducationMapper } from '@mappers/academic-education.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { IAcademicEducationRepository } from '@repositories/interfaces/academic-education-repository.interface';

@Injectable()
export class AcademicEducationService {
  constructor(
    @Inject('ACADEMIC_EDUCATION_REPOSITORY')
    private readonly academicEducationRepository: IAcademicEducationRepository,
  ) {}

  async find(userId: string) {
    const academic = await this.academicEducationRepository.find(userId);

    return academic.map(AcademicEducationMapper.toResponse);
  }

  async create(request: AcademicType) {
    return AcademicEducationMapper.toResponse(
      await this.academicEducationRepository.create(request),
    );
  }

  async update(id: string, request: AcademicType) {
    return AcademicEducationMapper.toResponse(
      await this.academicEducationRepository.update(id, request),
    );
  }
}
