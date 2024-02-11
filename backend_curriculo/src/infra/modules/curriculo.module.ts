import { CurriculoController } from '@controllers/curriculo.controller';
import { Module } from '@nestjs/common';
import { CurriculoService } from '@services/curriculo.service';
import { DatabaseModule } from './database.module';
import { CurriculoRepository } from '../repositories/curriculo.repository';
import { UserRepository } from '@repositories/user.repository';
import { HabilityRepository } from '@repositories/hability.repository';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ZodErrorInfoInterceptor } from '../interceptor/zod-error-info.interceptor';
import { HabilitiesController } from '@controllers/habilities.controller';
import { HabilitiesService } from '@services/habilities.service';
import { ContactsController } from '@controllers/contacts.controller';
import { ContactsService } from '@services/contacts.service';
import { ContactsRepository } from '@repositories/contacts.repository';
import { UsersService } from '@services/users.service';
import { UsersController } from '@controllers/users.controller';
import { SocialMediasService } from '@services/social-medias.service';
import { SocialMediasController } from '@controllers/social-medias.controller';
import { SocialMediasRepository } from '@repositories/social-medias.repository';
import { LanguagesController } from '@controllers/languages.controller';
import { LanguagesService } from '@services/languages.service';
import { LanguagesRepository } from '@repositories/languages.repository';
import { ProfessionalExperienceController } from '@controllers/professional-experience.controller';
import { ProfessionalExperienceService } from '@services/professional-experience.service';
import { ProfessionalExperienceRepository } from '@repositories/professional-experiences.repository';
import { AddressRepository } from '@repositories/address.repository';
import { AddressController } from '@controllers/address.controller';
import { AddressService } from '@services/address.service';
import { AcademicEducationController } from '@controllers/academic-education.controller';
import { AcademicEducationService } from '@services/academic-education.service';
import { AcademicEducationRepository } from '@repositories/academic-education.repository';
import { PersonalDataController } from '@controllers/personal-data.controller';
import { PersonalDataService } from '@services/personal-data.service';
import { PersonalDatasRepository } from '@repositories/personal-datas.repository';
import { MulterModule } from '@nestjs/platform-express';

import { UploadImageService } from '@services/upload-image.service';

@Module({
  imports: [
    DatabaseModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './uploads',
      }),
    }),
  ],
  controllers: [
    CurriculoController,
    HabilitiesController,
    ContactsController,
    UsersController,
    SocialMediasController,
    LanguagesController,
    ProfessionalExperienceController,
    AddressController,
    AcademicEducationController,
    PersonalDataController,
  ],
  providers: [
    CurriculoService,
    {
      provide: 'CURRICULO_REPOSITORY',
      useClass: CurriculoRepository,
    },
    {
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      provide: 'HABILITY_REPOSITORY',
      useClass: HabilityRepository,
    },
    {
      provide: 'CONTACTS_REPOSITORY',
      useClass: ContactsRepository,
    },
    {
      provide: 'SOCIAL_MEDIAS_REPOSITORY',
      useClass: SocialMediasRepository,
    },
    {
      provide: 'LANGUAGES_REPOSITORY',
      useClass: LanguagesRepository,
    },
    {
      provide: 'PROFESSIONAL_EXPERIENCES_REPOSITORY',
      useClass: ProfessionalExperienceRepository,
    },
    {
      provide: 'ADDRESS_REPOSITORY',
      useClass: AddressRepository,
    },
    {
      provide: 'ACADEMIC_EDUCATION_REPOSITORY',
      useClass: AcademicEducationRepository,
    },
    {
      provide: 'PERSONAL_DATA_REPOSITORY',
      useClass: PersonalDatasRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodErrorInfoInterceptor,
    },
    HabilitiesService,
    ContactsService,
    UsersService,
    SocialMediasService,
    LanguagesService,
    ProfessionalExperienceService,
    AddressService,
    AcademicEducationService,
    PersonalDataService,
    UploadImageService,
  ],
  exports: [
    HabilitiesService,
    ContactsService,
    UsersService,
    SocialMediasService,
    LanguagesService,
    ProfessionalExperienceService,
    AddressService,
    AcademicEducationService,
    PersonalDataService,
  ],
})
export class CurriculoModule {}
