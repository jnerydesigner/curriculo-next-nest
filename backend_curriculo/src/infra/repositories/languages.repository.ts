import { Injectable } from '@nestjs/common';
import { ILanguagesRepository } from './interfaces/languages-repository.interface';
import { LanguagesEntity } from '@entities/languages.entity';
import { PrismaService } from '../database/postgres/prisma/client/prisma.service';
import { LanguagesMapper } from '@mappers/languages.mapper';
import { LanguagesIdType } from '@dtos/languages.dto';

@Injectable()
export class LanguagesRepository implements ILanguagesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page = 1, pageSize = 10): Promise<LanguagesEntity[]> {
    const skip = (page - 1) * pageSize;
    const languages = await this.prisma.languages.findMany({
      orderBy: {
        stars: 'desc',
      },
      skip,
      take: pageSize,
    });

    return languages.flatMap((language) => {
      return LanguagesMapper.toDomain(language);
    });
  }

  async create(language: LanguagesIdType): Promise<LanguagesEntity> {
    const languageCreated = await this.prisma.languages.create({
      data: {
        name: language.name,
        slug: language.slug,
        user_id: language.userId,
        stars: language.stars,
      },
    });

    return LanguagesMapper.toDomain(languageCreated);
  }

  async updateLanguage(
    id: string,
    language: LanguagesIdType,
  ): Promise<LanguagesEntity> {
    const searchLanguage = await this.prisma.languages.findUnique({
      where: {
        id,
      },
    });

    if (!searchLanguage) {
      throw new Error('Language not found');
    }

    const languageUpdated = await this.prisma.languages.update({
      where: {
        id,
      },
      data: {
        name: language.name,
        slug: language.slug,
        stars: language.stars,
        user_id: language.userId,
      },
    });

    return LanguagesMapper.toDomain(languageUpdated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.languages.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: string): Promise<LanguagesEntity[]> {
    const languages = await this.prisma.languages.findMany({
      where: {
        user_id: id,
      },
    });

    if (!languages) {
      throw new Error('Language not found');
    }

    return languages.map((language) => LanguagesMapper.toDomain(language));
  }
}
