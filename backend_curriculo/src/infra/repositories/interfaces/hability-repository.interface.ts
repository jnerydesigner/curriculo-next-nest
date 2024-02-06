import { CreateHabilityType } from '@dtos/create-hability.dto';
import { HabilityEntity } from '@entities/hability.entity';
import { UserEntity } from '@entities/user.entity';

export interface IHabilityRepository {
  findAll(): Promise<HabilityEntity[]>;
  create(hability: CreateHabilityType, userId: string): Promise<UserEntity>;
  update(hability: HabilityEntity): Promise<HabilityEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<HabilityEntity>;
}
