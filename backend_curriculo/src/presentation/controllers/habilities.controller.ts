import {
  CreateHabilityDTO,
  CreateHabilityType,
} from '@dtos/create-hability.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HabilitiesService } from '@services/habilities.service';

@Controller('habilities')
export class HabilitiesController {
  constructor(private readonly habilitiesService: HabilitiesService) {}
  @Get()
  findAll() {
    return this.habilitiesService.findAll();
  }

  @Post('/user')
  createHability(@Body() hability: CreateHabilityType) {
    const habilityParse = CreateHabilityDTO.parse(hability);

    return this.habilitiesService.create(habilityParse);
  }
}
