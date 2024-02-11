import { UserEntity } from '@entities/user.entity';
import { Prisma } from '@prisma/client';

export interface IUserRepository {
  findAll(): Promise<UserEntity[]>;
  create(user: Prisma.UserCreateInput): Promise<UserEntity>;
  update(idUser: string, user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  updateBio(id: string, bio: string): Promise<UserEntity>;
}
