import { randomUUID } from 'node:crypto';

export class ProfessionalExperienceDescriptionEntity {
  private _id: string;
  private _description: string;
  private _userId?: string;
  private _professionalExperiencesId?: string;

  constructor(
    description: string,
    userId?: string,
    id?: string,
    professionalExperiencesId?: string,
  ) {
    this._id = id !== null ? id : randomUUID();
    this._description = description;
    this._userId = userId;
    this._professionalExperiencesId = professionalExperiencesId;
  }

  get id(): string {
    return this._id;
  }

  set id(newId: string) {
    this._id = newId;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(newUserId: string | undefined) {
    this._userId = newUserId;
  }

  get professionalExperiencesId(): string | undefined {
    return this._professionalExperiencesId;
  }

  set professionalExperiencesId(
    newProfessionalExperiencesId: string | undefined,
  ) {
    this._professionalExperiencesId = newProfessionalExperiencesId;
  }
}
