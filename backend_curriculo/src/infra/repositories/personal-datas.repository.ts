import { PersonalData } from '@prisma/client';
import { PersonalDatasEntity } from '@entities/personal_datas.entity';
import { IPersonalDatasRepository } from './interfaces/personal-datas-repository.interface';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { PersonalDataMapper } from '@mappers/personal-data.mapper';
import { Injectable } from '@nestjs/common';
import { PersonalDataType } from '@dtos/personal-data.dto';

@Injectable()
export class PersonalDatasRepository implements IPersonalDatasRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<any[]> {
    const personalDatas = await this.prisma.personalData.findMany();

    return personalDatas.flatMap((personalData) => {
      return PersonalDataMapper.toDomain(personalData);
    });
  }
  async findById(id: string): Promise<PersonalDatasEntity> {
    const findOne = await this.prisma.personalData.findUnique({
      where: { id },
    });

    return PersonalDataMapper.toDomain(findOne);
  }

  async findByUserId(userId: string): Promise<PersonalDatasEntity> {
    const findOne = await this.prisma.personalData.findFirst({
      where: {
        user_id: userId,
      },
    });

    return PersonalDataMapper.toDomain(findOne);
  }

  async create(personalDatas: PersonalDataType): Promise<any> {
    const createOne = await this.prisma.personalData.create({
      data: PersonalDataMapper.toPersistence(personalDatas),
    });

    return PersonalDataMapper.toDomain(createOne);
  }

  async update(
    id: string,
    personalDatas: PersonalDatasEntity,
    nickname: string,
  ): Promise<PersonalDatasEntity> {
    const personalExists = await this.prisma.personalData.findUnique({
      where: { id },
    });

    const userExists = await this.prisma.user.findFirst({
      where: { id: personalExists.user_id },
    });

    if (!userExists) {
      throw new Error('User not found');
    }

    if (!personalExists) {
      throw new Error('Personal data not found');
    }
    const updateOne = await this.prisma.personalData.update({
      where: { id },
      data: {
        fullname: personalDatas?.fullname,
        document: personalDatas?.document,
        birthday: personalDatas?.birthday,
        avatar_url: personalDatas?.avatarUrl,
        profession: personalDatas?.profession,
      },
    });

    await this.prisma.user.update({
      where: { id: personalExists.user_id },
      data: {
        name: nickname,
      },
    });

    return PersonalDataMapper.toDomain(updateOne);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.personalData.delete({
      where: { id },
    });
  }
}
