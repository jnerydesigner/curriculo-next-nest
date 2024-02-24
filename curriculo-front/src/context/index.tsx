"use client";
import { createContext, useContext, useState } from "react";

interface PersonalData {
  id: string;
  fullname: string;
  document: string;
  birthday: string;
  userId: string;
  avatarUrl: string;
  profession: string;
}

interface Hability {
  id: string;
  name: string;
  slug: string;
  userId: string;
  value: number;
}

interface Contact {
  id: string;
  name: string;
  phone: string;
  userId: string;
  socialMedias: SocialMedia[];
}

interface SocialMedia {
  id: string;
  name: string;
  url: string;
  contactId: string;
}

interface AcademicEducation {
  id: string;
  title: string;
  university: string;
  description: string;
  dateInit: string;
  dateEnd: string;
  userId: string;
}

interface Address {
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

interface ProfessionalExperience {
  id: string;
  title: string;
  company: string;
  description: Description[];
  dateInit: string;
  dateEnd: string;
  isActualJob: boolean;
  userId: string;
}

interface ProfessionalExperienceProps {
  role: string;
  date: string;
  location: string;
  description: string[];
}

interface AcademicEducationsProps {
  degree: string;
  date: string;
  location: string;
  description: string;
}

interface Description {
  id: string;
  description: string;
  professionalExperienceId: string;
}

interface Language {
  id: string;
  name: string;
  slug: string;
  userId: string;
  stars: number;
}

export interface ICurriculo {
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
  professionalExperienceProps?: ProfessionalExperienceProps[];
  academicEducationsProps?: AcademicEducationsProps[];
}

interface CurriculoContextData {
  curriculo: ICurriculo;
}

interface Props {
  children: React.ReactNode;
}

const userId = "6e31accd-1054-4cd4-ab34-f8d56da8e172";

const AppContext = createContext<{ userId: string }>({
  userId: "6e31accd-1054-4cd4-ab34-f8d56da8e172",
});

export function AppWrapper({ children }: Props) {
  return (
    <AppContext.Provider value={{ userId }}>{children}</AppContext.Provider>
  );
}

export function useCurriculoContext() {
  const context = useContext(AppContext);

  return context;
}
