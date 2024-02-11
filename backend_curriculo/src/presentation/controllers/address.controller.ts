import {
  AddressType,
  CreateAddressDTO,
  UpdateAddressDTO,
} from '@dtos/address.dto';
import { IdVerifyDTO, IdVerifyType } from '@dtos/id-verify.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddressService } from '@services/address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Post()
  create(@Body() body: AddressType) {
    const addressParse = CreateAddressDTO.parse(body);
    return this.addressService.create(addressParse);
  }

  @Patch(':id')
  update(@Body() body: AddressType, @Param('id') id: IdVerifyType) {
    const idParse = IdVerifyDTO.parse(id);
    const addressParse = UpdateAddressDTO.parse(body);
    return this.addressService.update(idParse, addressParse);
  }
}
