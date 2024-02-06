import { ProfessionalExperienceDescriptionEntity } from './professiona-experiences-description.entity';

export class ProfessionalExperienceEntity {
  private _id: string;
  private _title: string;
  private _company: string;
  private _dateInit: Date;
  private _dateEnd?: Date | null;
  private _isActualJob: boolean;
  private _userId?: string;
  private _descriptions: ProfessionalExperienceDescriptionEntity[];

  constructor(
    title: string,
    company: string,
    dateInit: Date,
    dateEnd: Date | null | undefined,
    isActualJob: boolean,
    userId?: string,
    id?: string,
    descriptions?: ProfessionalExperienceDescriptionEntity[],
  ) {
    this._id = id;
    this._title = title;
    this._company = company;
    this._dateInit = dateInit;
    this._dateEnd = dateEnd;
    this._isActualJob = isActualJob;
    this._userId = userId;
    this._descriptions = descriptions || [];
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

  get company(): string {
    return this._company;
  }

  set company(newCompany: string) {
    this._company = newCompany;
  }

  get dateInit(): Date {
    return this._dateInit;
  }

  set dateInit(newDateInit: Date) {
    this._dateInit = newDateInit;
  }

  get dateEnd(): Date | null | undefined {
    return this._dateEnd;
  }

  set dateEnd(newDateEnd: Date | null | undefined) {
    this._dateEnd = newDateEnd;
  }

  get isActualJob(): boolean {
    return this._isActualJob;
  }

  set isActualJob(newIsActualJob: boolean) {
    this._isActualJob = newIsActualJob;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(newUserId: string | undefined) {
    this._userId = newUserId;
  }

  get descriptions(): ProfessionalExperienceDescriptionEntity[] {
    return this._descriptions;
  }

  set descriptions(newDescriptions: ProfessionalExperienceDescriptionEntity[]) {
    this._descriptions = newDescriptions;
  }
}
