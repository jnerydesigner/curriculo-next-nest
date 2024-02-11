import {
  CreateHabilityDTO,
  CreateHabilityType,
} from '@dtos/create-hability.dto';
import { UserCreateDTO, UserCreateType } from '@dtos/user-create.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurriculoService } from '@services/curriculo.service';

@Controller()
export class CurriculoController {
  constructor(private readonly curriculoService: CurriculoService) {}
  @Get()
  findAll() {
    return this.curriculoService.findAll();
  }

  @Post('/user')
  create(@Body() user: UserCreateType) {
    const userParse = UserCreateDTO.parse(user);

    return this.curriculoService.createUser(userParse);
  }

  @Post('/user/hability/:userId')
  createHability(
    @Body() hability: CreateHabilityType,
    @Param('userId') userId: string,
  ) {
    const habilityParse = CreateHabilityDTO.parse(hability);

    return this.curriculoService.createHability(habilityParse, userId);
  }
}
