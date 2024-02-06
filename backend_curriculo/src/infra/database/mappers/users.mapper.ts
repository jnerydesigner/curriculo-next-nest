import { UserCreateType } from '@dtos/user-create.dto';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    PersonalDatas: true;
    Habilities: true;
    Contacts: {
      include: {
        SocialMedias: true;
      };
    };
    AcademicEducations: true;
    Address: true;
    ProfessionalExperiences: {
      include: {
        ProfessionalExperiencesDescription: true;
      };
    };
    Languages: true;
  };
}>;

@Injectable()
export class UsersMapper {
  static toPrisma(raw: UserCreateType): Prisma.UserCreateInput {
    return {
      email: raw.email,
      name: raw.name,
      password: raw.password,
    };
  }

  static toResponse(raw: UserWithRelations): any {
    return {
      id: raw.id,
      name: raw.name,
      email: raw.email,
      bio: raw.bio,
      personalData: raw.PersonalDatas.flatMap((personalData) => {
        return {
          id: personalData.id,
          fullname: personalData.fullname,
          document: personalData.document,
          birthday: personalData.birthday,
          userId: personalData.user_id,
          avatarUrl: personalData.avatar_url,
          profession: personalData.profession,
        };
      }),
      habilities: raw.Habilities.flatMap((hability) => {
        return {
          id: hability.id,
          name: hability.name,
          slug: hability.slug,
          userId: hability.user_id,
          value: hability.value,
        };
      }),
      contacts: raw.Contacts.flatMap((contact) => {
        return {
          id: contact.id,
          name: contact.name,
          phone: contact.phone,
          userId: contact.user_id,
          socialMedias: contact.SocialMedias.flatMap((socialMedia) => {
            return {
              id: socialMedia.id,
              name: socialMedia.name,
              url: socialMedia.url,
              contactId: socialMedia.contacts_id,
            };
          }),
        };
      }),
      academicEducations: raw.AcademicEducations.flatMap(
        (academicEducation) => {
          return {
            id: academicEducation.id,
            title: academicEducation.title,
            university: academicEducation.university,
            description: academicEducation.description,
            dateInit: academicEducation.date_init,
            dateEnd: academicEducation.date_end,
            userId: academicEducation.user_id,
          };
        },
      ),
      address: raw.Address.flatMap((address) => {
        return {
          id: address.id,
          street: address.street,
          number: address.number,
          district: address.district,
          city: address.city,
          state: address.state,
          country: address.country,
          zipcode: address.zipcode,
          userId: address.user_id,
        };
      }),
      professionalExperiences: raw.ProfessionalExperiences.flatMap(
        (professional) => {
          return {
            id: professional.id,
            title: professional.title,
            company: professional.company,
            description:
              professional.ProfessionalExperiencesDescription.flatMap(
                (description) => {
                  return {
                    id: description.id,
                    description: description.description,
                    professionalExperienceId:
                      description.professional_experiences_id,
                  };
                },
              ),
            dateInit: new Date(professional.date_init),
            dateEnd: new Date(professional.date_end),
            isActualJob: professional.is_actual_job,
            userId: professional.user_id,
          };
        },
      ),
      languages: raw.Languages.flatMap((language) => {
        return {
          id: language.id,
          name: language.name,
          slug: language.slug,
          userId: language.user_id,
          stars: language.stars,
        };
      }),
    };
  }
}
