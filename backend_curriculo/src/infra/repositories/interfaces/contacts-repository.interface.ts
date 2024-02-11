import { CreateContactType } from '@dtos/create-contacts.dto';
import { UpdateContactType } from '@dtos/update-contacts.dto';

import { ContactsEntity } from '@entities/contacts.entity';

export interface IContactsRepository {
  findAll(): Promise<ContactsEntity[]>;
  create(contact: CreateContactType, userId: string): Promise<ContactsEntity>;
  update(
    contact: UpdateContactType,
    contactId: string,
  ): Promise<ContactsEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ContactsEntity>;
  findOneContactUserId(userId: string): Promise<ContactsEntity>;
}
