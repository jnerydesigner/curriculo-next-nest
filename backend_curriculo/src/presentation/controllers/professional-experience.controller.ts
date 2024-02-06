import { IdVerifyType } from '@dtos/id-verify.dto';
import {
  CreateProfessionalExperienceDTO,
  CreateProfessionalExperienceDescriptionDTO,
  ProfessionalExperienceDescriptionType,
  ProfessionalExperienceType,
  UpdateProfessionalExperienceDTO,
} from '@dtos/professional-experience.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfessionalExperienceService } from '@services/professional-experience.service';

@Controller('professional-experience')
export class ProfessionalExperienceController {
  constructor(
    private readonly professionalExperienceService: ProfessionalExperienceService,
  ) {}

  @Get()
  findAll() {
    return this.professionalExperienceService.findAll();
  }

  @Post()
  create(@Body() body: ProfessionalExperienceType) {
    const professionalExperienceParse =
      CreateProfessionalExperienceDTO.parse(body);
    return this.professionalExperienceService.create(
      professionalExperienceParse,
    );
  }

  @Post('/description')
  createDescription(@Body() body: ProfessionalExperienceDescriptionType) {
    const professionalExperienceParse =
      CreateProfessionalExperienceDescriptionDTO.parse(body);
    return this.professionalExperienceService.createDescription(
      professionalExperienceParse,
    );
  }

  @Patch(':id')
  update(
    @Body() body: ProfessionalExperienceType,
    @Param('id') id: IdVerifyType,
  ) {
    const professionalExperienceParse =
      UpdateProfessionalExperienceDTO.parse(body);
    return this.professionalExperienceService.update(
      id,
      professionalExperienceParse,
    );
  }
}
