import { AddressType } from '@dtos/address.dto';
import { AddressEntity } from '@entities/adresses.entity';
import { AddressMapper } from '@mappers/address.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { IAddressRepository } from '@repositories/interfaces/address-repository.interface';

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private readonly addressRepository: IAddressRepository,
  ) {}

  async findAll() {
    const addresses = await this.addressRepository.findAll();

    return addresses.flatMap((item) => {
      return AddressMapper.toResponse(item);
    });
  }

  async create(request: AddressType) {
    return AddressMapper.toResponse(
      await this.addressRepository.create(request),
    );
  }

  async update(id: string, request: AddressType) {
    return AddressMapper.toResponse(
      await this.addressRepository.update(id, request),
    );
  }
}
