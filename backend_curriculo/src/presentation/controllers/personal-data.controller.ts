import { IdVerifyDTO, IdVerifyType } from '@dtos/id-verify.dto';
import {
  CreatePersonalDataDTO,
  PersonalDataType,
  UpdatePersonalDataDTO,
} from '@dtos/personal-data.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PersonalDataService } from '@services/personal-data.service';

@Controller('personal-data')
export class PersonalDataController {
  constructor(private readonly personalDataService: PersonalDataService) {}

  @Get()
  getPersonalData() {
    return this.personalDataService.findAll();
  }

  @Post()
  createPersonalData(@Body() data: PersonalDataType) {
    const personalDataParse = CreatePersonalDataDTO.parse(data);
    return this.personalDataService.createPersonalData(personalDataParse);
  }

  @Get(':id')
  findOne(@Param('id') id: IdVerifyType) {
    const idParse = IdVerifyDTO.parse(id);
    return this.personalDataService.findOne(idParse);
  }

  @Patch(':id')
  updatePersonalData(
    @Param('id') id: IdVerifyType,
    @Body() data: PersonalDataType,
  ) {
    const idParse = IdVerifyDTO.parse(id);
    const personalDataParse = UpdatePersonalDataDTO.parse(data);
    return this.personalDataService.updatePersonalData(
      idParse,
      personalDataParse,
      personalDataParse.nickname,
    );
  }

  @Delete(':id')
  deletePersonalData(@Param('id') id: IdVerifyType) {
    const idParse = IdVerifyDTO.parse(id);
    return this.personalDataService.deletePersonalData(idParse);
  }
}
