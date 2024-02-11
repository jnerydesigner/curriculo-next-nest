export class AddressEntity {
  private _id: string;
  private _street: string;
  private _number: string;
  private _district: string;
  private _city: string;
  private _state: string;
  private _country: string;
  private _zipcode: string;
  private _userId: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
    userId: string,
    createdAt: Date,
    updatedAt: Date,
    id?: string,
  ) {
    this._id = id !== null ? id : '';
    this._street = street;
    this._number = number;
    this._district = district;
    this._city = city;
    this._state = state;
    this._country = country;
    this._zipcode = zipcode;
    this._userId = userId;
    this._createdAt = createdAt === null ? new Date() : createdAt;
    this._updatedAt = updatedAt === null ? new Date() : updatedAt;
  }

  get id(): string {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get street(): string {
    return this._street;
  }

  set street(newStreet: string) {
    this._street = newStreet;
  }

  get number(): string {
    return this._number;
  }

  set number(newNumber: string) {
    this._number = newNumber;
  }

  get district(): string {
    return this._district;
  }

  set district(newDistrict: string) {
    this._district = newDistrict;
  }

  get city(): string {
    return this._city;
  }

  set city(newCity: string) {
    this._city = newCity;
  }

  get state(): string {
    return this._state;
  }

  set state(newState: string) {
    this._state = newState;
  }

  get country(): string {
    return this._country;
  }

  set country(newCountry: string) {
    this._country = newCountry;
  }

  get zipcode(): string {
    return this._zipcode;
  }

  set zipcode(newZipcode: string) {
    this._zipcode = newZipcode;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(newUserId: string) {
    this._userId = newUserId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(newCreatedAt: Date) {
    this._createdAt = newCreatedAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(newUpdatedAt: Date) {
    this._updatedAt = newUpdatedAt;
  }
}
