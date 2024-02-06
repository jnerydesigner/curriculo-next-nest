import { PersonalDataType } from '@dtos/personal-data.dto';
import { PersonalDataMapper } from '@mappers/personal-data.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { IPersonalDatasRepository } from '@repositories/interfaces/personal-datas-repository.interface';

@Injectable()
export class PersonalDataService {
  constructor(
    @Inject('PERSONAL_DATA_REPOSITORY')
    private readonly personalDataRepository: IPersonalDatasRepository,
  ) {}
  async findAll() {
    const personals = await this.personalDataRepository.findAll();

    return personals.flatMap((personal) => {
      return PersonalDataMapper.toResponse(personal);
    });
  }

  async createPersonalData(data: PersonalDataType) {
    return PersonalDataMapper.toResponse(
      await this.personalDataRepository.create(data),
    );
  }

  async updatePersonalData(
    id: string,
    data: PersonalDataType,
    nickname: string,
  ) {
    const update = await this.personalDataRepository.update(
      id,
      {
        avatarUrl: data?.avatarUrl,
        birthday: data?.birthday,
        document: data?.document,
        fullname: data?.fullname,
        profession: data?.profession,
      },
      nickname,
    );

    if (!update) {
      throw new Error('Personal data not found');
    }
    return PersonalDataMapper.toResponse(update);
  }

  async deletePersonalData(id: string) {
    return this.personalDataRepository.delete(id);
  }

  async findOne(id: string) {
    const personal = await this.personalDataRepository.findById(id);

    if (!personal) {
      throw new Error('Personal data not found');
    }

    return PersonalDataMapper.toResponse(personal);
  }
}
