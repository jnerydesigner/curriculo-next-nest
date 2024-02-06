import { AcademicType } from '@dtos/academic-educations.dto';
import { AcademicEducationEntity } from '@entities/academic-educations.entity';

export interface IAcademicEducationRepository {
  find(userId: string): Promise<AcademicEducationEntity[]>;
  create(request: AcademicType): Promise<AcademicEducationEntity>;
  update(id: string, request: AcademicType): Promise<AcademicEducationEntity>;
}
