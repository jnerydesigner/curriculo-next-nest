import { CreateHabilityType } from '@dtos/create-hability.dto';
import { UserCreateType } from '@dtos/user-create.dto';
import { HabilityEntity } from '@entities/hability.entity';
import { UserEntity } from '@entities/user.entity';
import { UsersMapper } from '@mappers/users.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { ICurriculoRepository } from '@repositories/interfaces/curriculo-repository.interface ';
import { IHabilityRepository } from '@repositories/interfaces/hability-repository.interface';
import { IUserRepository } from '@repositories/interfaces/user-repository.interface';

@Injectable()
export class CurriculoService {
  constructor(
    @Inject('CURRICULO_REPOSITORY')
    private readonly curriculoRepository: ICurriculoRepository,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: IUserRepository,
    @Inject('HABILITY_REPOSITORY')
    private readonly habilityRepository: IHabilityRepository,
  ) {}
  async findAll(): Promise<UserEntity[]> {
    return this.curriculoRepository.findAll();
  }

  async createUser(user: UserCreateType): Promise<UserEntity> {
    const userMapper = UsersMapper.toPrisma(user);
    return this.userRepository.create(userMapper);
  }

  async createHability(
    hability: CreateHabilityType,
    userId: string,
  ): Promise<UserEntity> {
    return this.habilityRepository.create(hability, userId);
  }
}
