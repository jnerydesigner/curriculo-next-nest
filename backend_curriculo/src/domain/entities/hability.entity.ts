export class HabilityEntity {
  private _id: string;
  private _name: string;
  private _slug: string;
  private _value: number;
  private _user_id?: string;
  constructor(name: string, slug: string, value: number, user_id?: string) {
    this._name = name;
    this._slug = slug;
    this._value = value;

    this._user_id = user_id;
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

  get value(): number {
    return this._value;
  }

  set value(newValue: number) {
    this._value = newValue;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(newSlug: string) {
    this._slug = newSlug;
  }

  get user_id(): string | undefined {
    return this._user_id;
  }

  set user_id(newUserId: string | undefined) {
    this._user_id = newUserId;
  }
}
