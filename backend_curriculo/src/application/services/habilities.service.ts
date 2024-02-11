import { CreateHabilityType } from '@dtos/create-hability.dto';
import { Inject, Injectable } from '@nestjs/common';
import { IHabilityRepository } from '@repositories/interfaces/hability-repository.interface';

@Injectable()
export class HabilitiesService {
  constructor(
    @Inject('HABILITY_REPOSITORY')
    private readonly habilityRepository: IHabilityRepository,
  ) {}
  async findAll() {
    return this.habilityRepository.findAll();
  }

  async create(hability: CreateHabilityType) {
    return this.habilityRepository.create(hability, hability.userId);
  }
}
