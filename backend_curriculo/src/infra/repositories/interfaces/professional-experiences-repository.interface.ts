import {
  ProfessionalExperienceDescriptionType,
  ProfessionalExperienceDescriptionWithIdType,
  ProfessionalExperienceType,
} from '@dtos/professional-experience.dto';
import { ProfessionalExperienceDescriptionEntity } from '@entities/professiona-experiences-description.entity';
import { ProfessionalExperienceEntity } from '@entities/professional-experiencies.entity';

export interface IProfessionalExperiencesRepository {
  findAll(): Promise<ProfessionalExperienceDescriptionWithIdType[]>;
  findById(id: string): Promise<ProfessionalExperienceEntity>;
  findByUserId(userId: string): Promise<ProfessionalExperienceEntity[]>;
  create(
    professionalExperience: ProfessionalExperienceType,
  ): Promise<ProfessionalExperienceEntity>;
  update(
    id: string,
    professionalExperience: ProfessionalExperienceType,
  ): Promise<ProfessionalExperienceEntity>;
  delete(id: string): Promise<void>;
  createDescription(
    description: ProfessionalExperienceDescriptionType,
  ): Promise<ProfessionalExperienceDescriptionEntity>;
}
