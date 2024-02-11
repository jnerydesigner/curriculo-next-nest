export class EntitysExistsError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 408) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, EntitysExistsError.prototype);
  }
}
