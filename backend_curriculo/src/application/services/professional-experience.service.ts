import {
  ProfessionalExperienceDescriptionType,
  ProfessionalExperienceType,
} from '@dtos/professional-experience.dto';
import { ProfessionalExperiencesMapper } from '@mappers/professional-experiences.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { IProfessionalExperiencesRepository } from '@repositories/interfaces/professional-experiences-repository.interface';

@Injectable()
export class ProfessionalExperienceService {
  constructor(
    @Inject('PROFESSIONAL_EXPERIENCES_REPOSITORY')
    private readonly professionalExperiencesRepository: IProfessionalExperiencesRepository,
  ) {}
  findAll() {
    return this.professionalExperiencesRepository.findAll();
  }

  async create(request: ProfessionalExperienceType) {
    return ProfessionalExperiencesMapper.toResponseTrue(
      await this.professionalExperiencesRepository.create(request),
    );
  }

  async update(id: string, request: ProfessionalExperienceType) {
    return this.professionalExperiencesRepository.update(id, request);
  }

  async createDescription(request: ProfessionalExperienceDescriptionType) {
    return ProfessionalExperiencesMapper.toResponseDescription(
      await this.professionalExperiencesRepository.createDescription(request),
    );
  }

  async findOneExperience(id: string): Promise<ProfessionalExperienceType[]> {
    const response = await this.professionalExperiencesRepository.findByUserId(
      id,
    );

    const professional = response.map((item) => {
      return ProfessionalExperiencesMapper.toResponseNew(item);
    });

    return professional;
  }
}
