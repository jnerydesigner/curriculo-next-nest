import { Injectable } from '@nestjs/common';
import { IAddressRepository } from './interfaces/address-repository.interface';

import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { AddressMapper } from '@mappers/address.mapper';
import { AddressType } from '@dtos/address.dto';
import { AddressEntity } from '@entities/adresses.entity';

@Injectable()
export class AddressRepository implements IAddressRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<AddressEntity[]> {
    const addresses = await this.prisma.address.findMany();

    const addressMap = addresses.flatMap((item) => {
      return new AddressEntity(
        item.street,
        item.number,
        item.district,
        item.city,
        item.state,
        item.country,
        item.zipcode,
        item.user_id,
        new Date(item.createdAt),
        new Date(item.updatedAt),
        item.id,
      );
    });

    return addressMap;
  }

  async create(address: AddressType): Promise<AddressEntity> {
    const addressCreated = await this.prisma.address.create({
      data: {
        street: address.street,
        number: address.number,
        district: address.district,
        city: address.city,
        state: address.state,
        country: address.country,
        zipcode: address.zipcode,
        user_id: address.userId,
        createdAt: address.createdAt,
        updatedAt: address.updatedAt,
      },
    });

    return AddressMapper.toDomain(addressCreated);
  }

  async update(id: string, address: AddressType): Promise<AddressEntity> {
    const findAddress = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });

    if (!findAddress) {
      throw new Error('Address not found');
    }

    const addressUpdated = await this.prisma.address.update({
      where: {
        id,
      },
      data: {
        street: address.street,
        number: address.number,
        district: address.district,
        city: address.city,
        state: address.state,
        country: address.country,
        zipcode: address.zipcode,
        user_id: address.userId,
        createdAt: address.createdAt,
        updatedAt: address.updatedAt,
      },
    });

    return AddressMapper.toDomain(addressUpdated);
  }
}
