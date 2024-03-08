import {
  CreateLanguagesDTO,
  LanguagesIdType,
  LanguagesType,
  UpdateLanguagesDTO,
} from '@dtos/languages.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LanguagesService } from '@services/languages.service';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}
  @Get()
  findAll() {
    return this.languagesService.findAll();
  }

  @Post()
  create(@Body() language: LanguagesType) {
    const languageParse = CreateLanguagesDTO.parse(language);
    return this.languagesService.create(languageParse);
  }

  @Get(':idUser')
  findOne(@Param('idLanguage') idLanguage: string) {
    return this.languagesService.findOne(idLanguage);
  }

  @Patch(':idLanguage')
  updateLanguage(
    @Body() language: LanguagesIdType,
    @Param('idLanguage') idLanguage: string,
  ) {
    const languageParse = UpdateLanguagesDTO.parse(language);
    return this.languagesService.update(idLanguage, languageParse);
  }

  @Delete(':idLanguage')
  deleteLanguage(@Param('idLanguage') idLanguage: string) {
    return this.languagesService.delete(idLanguage);
  }
}
