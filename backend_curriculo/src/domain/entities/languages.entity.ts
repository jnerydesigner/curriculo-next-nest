export class LanguagesEntity {
  private _id: string;
  private _name: string;
  private _slug: string;
  private _stars?: number;
  private _userId?: string;
  constructor(
    name: string,
    slug: string,
    user_id?: string,
    stars?: number,
    id?: string,
  ) {
    this._id = id !== null ? id : '';
    this._name = name;
    this._slug = slug;
    this.stars = stars;
    this.userId = user_id;
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

  get slug(): string {
    return this._slug;
  }

  set slug(newSlug: string) {
    this._slug = newSlug;
  }

  get stars(): number {
    return this._stars;
  }

  set stars(stars: number) {
    this._stars = stars;
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(newUserId: string | undefined) {
    this._userId = newUserId;
  }
}
