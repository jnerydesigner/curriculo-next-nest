export class ContactsEntity {
  private _id: string;
  private _name: string;
  private _phone: string;
  private _isWhatsapp: boolean;
  private _userId?: string;
  constructor(
    name: string,
    phone: string,
    isWhatsapp: boolean,
    userId?: string,
    id?: string,
  ) {
    this._id = id !== null ? id : '';
    this._name = name;
    this._phone = phone;
    this._isWhatsapp = isWhatsapp;
    this._userId = userId;
  }

  get id(): string {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(newPhone: string) {
    this._phone = newPhone;
  }

  get isWhatsapp(): boolean {
    return this._isWhatsapp;
  }

  set isWhatsapp(newIsWhatsapp: boolean) {
    this._isWhatsapp = newIsWhatsapp;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(newUserId: string | undefined) {
    this._userId = newUserId;
  }
}
