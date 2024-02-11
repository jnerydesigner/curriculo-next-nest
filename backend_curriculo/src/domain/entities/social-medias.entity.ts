export class SocialMediasEntity {
  private _id: string;
  private _name: string;
  private _slug: string;
  private _url: string;
  private _contactId?: string;
  constructor(
    name: string,
    slug: string,
    url: string,
    contactId?: string,
    id?: string,
  ) {
    this._id = id !== null ? id : '';
    this._name = name;
    this._url = url;
    this._contactId = contactId;
    this._slug = slug;
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

  get url(): string {
    return this._url;
  }

  set url(newUrl: string) {
    this._url = newUrl;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(newSlug: string) {
    this._slug = newSlug;
  }

  get contactId(): string | undefined {
    return this._contactId;
  }

  set contactId(newContactId: string | undefined) {
    this._contactId = newContactId;
  }
}
