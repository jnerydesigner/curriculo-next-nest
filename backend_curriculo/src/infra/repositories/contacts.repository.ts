import { Injectable } from '@nestjs/common';
import { IContactsRepository } from './interfaces/contacts-repository.interface';
import { ContactsEntity } from '@entities/contacts.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { ContactsMapper } from '@mappers/contacts.mapper';
import { CreateContactType } from '@dtos/create-contacts.dto';
import { UpdateContactType } from '@dtos/update-contacts.dto';

@Injectable()
export class ContactsRepository implements IContactsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(
    contact: UpdateContactType,
    contactId: string,
  ): Promise<ContactsEntity> {
    const data = ContactsMapper.toPersistent(contact);

    await this.prisma.contacts.update({
      where: {
        id: contactId,
      },
      data,
    });

    const findContact = await this.prisma.contacts.findUnique({
      where: {
        id: contactId,
      },
    });
    const contactMapper = ContactsMapper.totEntity(findContact);

    return contactMapper;
  }

  async findAll(): Promise<ContactsEntity[]> {
    const contacts = await this.prisma.contacts.findMany();

    return contacts.flatMap((contact) => {
      return ContactsMapper.totEntity({
        ...contact,
        id: contact.id,
      });
    });
  }

  async create(
    contact: CreateContactType,
    userId: string,
  ): Promise<ContactsEntity> {
    const { name, phone, isWhatsapp } = contact;
    const contactData = await this.prisma.contacts.create({
      data: {
        name,
        phone,
        is_whatsapp: isWhatsapp,
        user_id: userId,
      },
    });

    const contactMapper = ContactsMapper.totEntity(contactData);

    return contactMapper;
    // Prisma.Prisma__ContactsClient
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<ContactsEntity> {
    throw new Error('Method not implemented.');
  }

  async findOneContactUserId(userId: string): Promise<ContactsEntity> {
    const userContact = await this.prisma.contacts.findFirst({
      where: {
        user_id: userId,
      },
    });
    const contactMapper = ContactsMapper.totEntity(userContact);
    return contactMapper;
  }
}
