import { LanguagesIdType, LanguagesType } from '@dtos/languages.dto';
import { LanguagesMapper } from '@mappers/languages.mapper';
import { Inject, Injectable } from '@nestjs/common';
import { ILanguagesRepository } from '@repositories/interfaces/languages-repository.interface';
import { GenerateSlug } from 'src/infra/helpers/generate-slug';

@Injectable()
export class LanguagesService {
  constructor(
    @Inject('LANGUAGES_REPOSITORY')
    private readonly languagesRepository: ILanguagesRepository,
  ) {}

  async findAll() {
    return (await this.languagesRepository.findAll()).flatMap((language) => {
      return LanguagesMapper.toResponse(language);
    });
  }

  async create(languages: LanguagesType) {
    const languageType = {
      ...languages,
      slug: GenerateSlug.execute(languages.name),
    };

    return LanguagesMapper.toResponse(
      await this.languagesRepository.create(languageType),
    );
  }

  async update(id: string, languages: LanguagesIdType) {
    let langUpdate = languages;
    if (languages.name) {
      langUpdate = {
        ...languages,
        slug: GenerateSlug.execute(languages.name),
      };
    } else {
      langUpdate = {
        ...languages,
        stars: languages.stars,
      };
    }
    const languagesUpdated = await this.languagesRepository.updateLanguage(
      id,
      langUpdate,
    );

    return LanguagesMapper.toResponse(languagesUpdated);
  }

  delete(id: string) {
    return this.languagesRepository.delete(id);
  }
}
