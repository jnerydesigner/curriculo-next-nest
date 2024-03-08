import { LanguagesIdType, LanguagesType } from '@dtos/languages.dto';
import { LanguagesEntity } from '@entities/languages.entity';

export interface ILanguagesRepository {
  findAll(): Promise<LanguagesEntity[]>;
  create(language: LanguagesType): Promise<LanguagesEntity>;
  updateLanguage(
    id: string,
    language: LanguagesIdType,
  ): Promise<LanguagesEntity>;

  delete(id: string): Promise<void>;
  findOne(id: string): Promise<LanguagesEntity[]>;
}
