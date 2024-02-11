export class AcademicEducationEntity {
  private _id: string;
  private _title: string;
  private _university: string;
  private _description: string;
  private _dateInit: Date;
  private _dateEnd: Date;
  private _userId: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    title: string,
    university: string,
    description: string,
    dateInit: Date,
    dateEnd: Date,
    userId: string,
    createdAt: Date,
    updatedAt: Date,
    id?: string,
  ) {
    this._id = id !== null ? id : '';
    this._title = title;
    this._university = university;
    this._description = description;
    this._dateInit = dateInit;
    this._dateEnd = dateEnd;
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

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  get university(): string {
    return this._university;
  }

  set university(newUniversity: string) {
    this._university = newUniversity;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get dateInit(): Date {
    return this._dateInit;
  }

  set dateInit(newDateInit: Date) {
    this._dateInit = newDateInit;
  }

  get dateEnd(): Date {
    return this._dateEnd;
  }

  set dateEnd(newDateEnd: Date) {
    this._dateEnd = newDateEnd;
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
