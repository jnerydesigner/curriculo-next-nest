import { ContactWithIDType } from '@dtos/create-contacts.dto';
import { UpdateContactType } from '@dtos/update-contacts.dto';
import { ContactsEntity } from '@entities/contacts.entity';
import { Contacts, Prisma } from '@prisma/client';

export class ContactsMapper {
  static toPersistent(
    contactsUpdate: UpdateContactType,
  ): Prisma.ContactsUpdateInput {
    return {
      id: contactsUpdate.id,
      name: contactsUpdate.name && contactsUpdate.name,
      is_whatsapp: contactsUpdate.isWhatsapp && contactsUpdate.isWhatsapp,
      phone: contactsUpdate.phone && contactsUpdate.phone,
    };
  }

  static totEntity(raw: Contacts): ContactsEntity {
    const { name, phone, is_whatsapp, user_id } = raw;
    return new ContactsEntity(name, phone, is_whatsapp, user_id, raw.id);
  }

  static toResponse(raw: ContactsEntity): ContactWithIDType {
    return {
      id: raw.id,
      name: raw.name,
      phone: raw.phone,
      isWhatsapp: raw.isWhatsapp,
      userId: raw.userId,
    };
  }
}
