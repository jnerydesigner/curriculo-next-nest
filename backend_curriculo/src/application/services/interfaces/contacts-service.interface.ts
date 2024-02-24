export abstract class ContactsServiceInterface {
  abstract findAll(): Promise<any>;
  abstract create(contactInput: any): Promise<any>;
  abstract update(contactInput: any): Promise<any>;
  abstract findOneContactUserId(userId: string): Promise<any>;
}
