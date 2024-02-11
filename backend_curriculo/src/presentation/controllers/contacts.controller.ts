import { CreateContactDTO, CreateContactType } from '@dtos/create-contacts.dto';
import { UpdateContactDTO, UpdateContactType } from '@dtos/update-contacts.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactsService } from '@services/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Post()
  create(@Body() contact: CreateContactType) {
    const contactParsed = CreateContactDTO.parse(contact);
    return this.contactsService.create(contactParsed);
  }

  @Patch()
  update(@Body() contact: UpdateContactType) {
    const contactParsed = UpdateContactDTO.parse(contact);
    return this.contactsService.update(contactParsed);
  }

  @Get(':userId')
  findOneContactUserId(@Param('userId') userId: string) {
    return this.contactsService.findOneContactUserId(userId);
  }
}
