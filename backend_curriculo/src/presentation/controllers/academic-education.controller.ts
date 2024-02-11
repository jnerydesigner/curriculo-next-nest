import {
  AcademicType,
  CreateAcademicEducationDTO,
  UpdateAcademicEducationDTO,
} from '@dtos/academic-educations.dto';
import { IdVerifyDTO, IdVerifyType } from '@dtos/id-verify.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AcademicEducationService } from '@services/academic-education.service';

@Controller('academic-education')
export class AcademicEducationController {
  constructor(
    private readonly academicEducationService: AcademicEducationService,
  ) {}

  @Get('/:userId')
  find(@Param('userId') userId: string) {
    return this.academicEducationService.find(userId);
  }

  @Post()
  create(@Body() body: AcademicType) {
    const academicParse = CreateAcademicEducationDTO.parse(body);

    return this.academicEducationService.create(academicParse);
  }

  @Patch(':id')
  update(@Body() body: AcademicType, @Param('id') id: IdVerifyType) {
    const idParse = IdVerifyDTO.parse(id);
    const academicParse = UpdateAcademicEducationDTO.parse(body);
    return this.academicEducationService.update(idParse, academicParse);
  }
}
