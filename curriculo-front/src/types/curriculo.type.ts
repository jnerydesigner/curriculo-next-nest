export interface CurriculoRoot {
  id: string;
  name: string;
  email: string;
  bio: string;
  personalData: PersonalData[];
  habilities: Hability[];
  contacts: Contact[];
  academicEducations: AcademicEducation[];
  address: Address[];
  professionalExperiences: ProfessionalExperience[];
  languages: Language[];
}

export interface PersonalData {
  id: string;
  fullname: string;
  document: string;
  birthday: string;
  userId: string;
  avatarUrl: string;
  profession: string;
}

export interface Hability {
  id: string;
  name: string;
  slug: string;
  userId: string;
  value: number;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  userId: string;
  socialMedias: SocialMedia[];
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  contactId: string;
}

export interface AcademicEducation {
  id: string;
  title: string;
  university: string;
  description: string;
  dateInit: string;
  dateEnd: string;
  userId: string;
}

export interface Address {
  id: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  userId: string;
}

export interface ProfessionalExperience {
  id: string;
  title: string;
  company: string;
  description: Description[];
  dateInit: string;
  dateEnd: string;
  isActualJob: boolean;
  userId: string;
}

export interface Description {
  id: string;
  description: string;
  professionalExperienceId: string;
}

export interface Language {
  id: string;
  name: string;
  slug: string;
  userId: string;
  stars: number;
}
