import { Injectable } from '@nestjs/common';
import { IHabilityRepository } from './interfaces/hability-repository.interface';
import { HabilityEntity } from '@entities/hability.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { UserEntity } from '@entities/user.entity';
import { CreateHabilityType } from '@dtos/create-hability.dto';
import { EntitysExistsError } from '../exceptions/entity-exists.error';
import { GenerateSlug } from '../helpers/generate-slug';

@Injectable()
export class HabilityRepository implements IHabilityRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<HabilityEntity[]> {
    return this.prisma.habilities.findMany() as Promise<HabilityEntity[]>;
  }
  async create(
    hability: CreateHabilityType,
    userId: string,
  ): Promise<UserEntity> {
    const slug = GenerateSlug.execute(hability.name);

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const habilityExists = await this.prisma.habilities.findUnique({
      where: {
        slug,
      },
    });

    if (habilityExists) {
      throw new EntitysExistsError('Hability already exists');
    }

    await this.prisma.habilities.create({
      data: {
        name: hability.name,
        slug: slug,
        user_id: user.id,
        value: hability.value,
      },
    });

    const userCreated = this.prisma.user.findFirst({
      where: { id: user.id },
      include: {
        Habilities: true,
      },
    });

    return userCreated;
  }
  update(hability: HabilityEntity): Promise<HabilityEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<HabilityEntity> {
    throw new Error('Method not implemented.');
  }
}
