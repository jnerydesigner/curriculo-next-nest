import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interfaces/user-repository.interface';
import { UserEntity } from '@entities/user.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { Prisma } from '@prisma/client';
import { EntitysExistsError } from '../exceptions/entity-exists.error';
import { UsersMapper } from '@mappers/users.mapper';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }
  findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }
  async create(user: Prisma.UserCreateInput): Promise<UserEntity> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (userExists) {
      throw new EntitysExistsError('User already exists');
    }
    const userCreated = this.prisma.user.create({
      data: user,
    });

    return userCreated;
  }
  update(idUser: string, user: UserEntity): Promise<UserEntity> {
    const userUpdated = this.prisma.user.update({
      where: { id: idUser },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return userUpdated;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
  async findById(id: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: {
        PersonalDatas: true,
        Habilities: true,
        Contacts: {
          include: {
            SocialMedias: true,
          },
        },
        AcademicEducations: true,
        Address: true,
        ProfessionalExperiences: {
          include: {
            ProfessionalExperiencesDescription: true,
          },
        },
        Languages: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return await UsersMapper.toResponse(user);
  }

  async updateBio(id: string, bio: string): Promise<any> {
    const user = await this.findById(id);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        bio,
      },
    });

    const userUpdated = await this.findById(id);

    return userUpdated;
  }
}
