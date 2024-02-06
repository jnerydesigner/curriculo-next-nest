import { AddressIdType } from '@dtos/address.dto';
import { AddressEntity } from '@entities/adresses.entity';
import { Address } from '@prisma/client';

export class AddressMapper {
  static toDomain(raw: Address): AddressEntity {
    const address = new AddressEntity(
      raw.street,
      raw.number,
      raw.district,
      raw.city,
      raw.state,
      raw.country,
      raw.zipcode,
      raw.user_id,
      new Date(raw.createdAt),
      new Date(raw.updatedAt),
      raw.id,
    );

    return address;
  }

  static toPersistence(address: AddressEntity) {
    return {
      id: address.id,
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
    };
  }

  static toResponse(raw: AddressEntity): AddressIdType {
    return {
      id: raw.id,
      street: raw.street,
      number: raw.number,
      district: raw.district,
      city: raw.city,
      state: raw.state,
      country: raw.country,
      zipcode: raw.zipcode,
      userId: raw.userId,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
