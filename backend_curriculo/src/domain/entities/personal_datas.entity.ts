import { randomUUID } from 'node:crypto';

export class PersonalDatasEntity {
  private _id: string;
  private _fullname: string;
  private _document: string;
  private _birthday: Date;
  private _userId?: string;
  private _avatarUrl?: string;
  private _profession?: string;

  constructor(
    fullname: string,
    document: string,
    birthday: Date,
    userId?: string,
    avatarUrl?: string,
    id?: string,
    profession?: string,
  ) {
    this._id = id !== null ? id : randomUUID();
    this._fullname = fullname;
    this._document = document;
    this._birthday = birthday;
    this._userId = userId;
    this._avatarUrl = avatarUrl;
    this._profession = profession;
  }

  get id(): string {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(newFullname: string) {
    this._fullname = newFullname;
  }

  get document(): string {
    return this._document;
  }

  set document(newDocument: string) {
    this._document = newDocument;
  }

  get profession(): string {
    return this._profession;
  }

  set profession(newProfession: string) {
    this._profession = newProfession;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(newEmail: Date) {
    this._birthday = newEmail;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(newUserId: string | undefined) {
    this._userId = newUserId;
  }

  get avatarUrl(): string | undefined {
    return this._avatarUrl;
  }

  set avatarUrl(newAvatarUrl: string | undefined) {
    this._avatarUrl = newAvatarUrl;
  }
}
