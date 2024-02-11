import { CreateContactType } from '@dtos/create-contacts.dto';
import { UpdateContactType } from '@dtos/update-contacts.dto';
import { ContactsMapper } from '@mappers/contacts.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { IContactsRepository } from '@repositories/interfaces/contacts-repository.interface';

@Injectable()
export class ContactsService {
  constructor(
    @Inject('CONTACTS_REPOSITORY')
    private readonly contactsRepository: IContactsRepository,
  ) {}
  async findAll() {
    const contactsResponse = await this.contactsRepository.findAll();

    return contactsResponse.flatMap((contact) => {
      return ContactsMapper.toResponse(contact);
    });
  }

  async create(contactInput: CreateContactType) {
    const response = await this.contactsRepository.create(
      contactInput,
      contactInput.userId,
    );

    const contact = ContactsMapper.toResponse(response);

    return contact;
  }

  async update(contactInput: UpdateContactType) {
    const response = await this.contactsRepository.update(
      contactInput,
      contactInput.id,
    );

    const contact = ContactsMapper.toResponse(response);

    return contact;
  }

  async findOneContactUserId(userId: string) {
    const response = await this.contactsRepository.findOneContactUserId(userId);

    const contact = ContactsMapper.toResponse(response);

    return contact;
  }
}
