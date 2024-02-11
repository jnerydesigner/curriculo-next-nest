import { Injectable } from '@nestjs/common';
import { ICurriculoRepository } from './interfaces/curriculo-repository.interface ';
import { UserEntity } from '@entities/user.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';

@Injectable()
export class CurriculoRepository implements ICurriculoRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(user: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  update(user: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }
}
