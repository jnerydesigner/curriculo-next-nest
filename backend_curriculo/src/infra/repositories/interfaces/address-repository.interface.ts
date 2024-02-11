import { AddressType } from '@dtos/address.dto';
import { AddressEntity } from '@entities/adresses.entity';

export interface IAddressRepository {
  findAll(): Promise<AddressEntity[]>;
  create(request: AddressType): Promise<AddressEntity>;
  update(id: string, request: AddressType): Promise<AddressEntity>;
}
