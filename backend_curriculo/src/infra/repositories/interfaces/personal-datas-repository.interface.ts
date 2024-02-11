import { PersonalDataType } from '@dtos/personal-data.dto';
import { PersonalDatasEntity } from '@entities/personal_datas.entity';

export interface IPersonalDatasRepository {
  findAll(): Promise<PersonalDatasEntity[]>;
  findById(id: string): Promise<PersonalDatasEntity>;
  findByUserId(userId: string): Promise<PersonalDatasEntity>;
  create(personalDatas: PersonalDataType): Promise<PersonalDatasEntity>;
  update(
    id: string,
    personalDatas: PersonalDataType,
    nickname?: string,
  ): Promise<PersonalDatasEntity>;
  delete(id: string): Promise<void>;
}
