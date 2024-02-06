import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'
import { api } from 'src/helpers/api'

interface PersonalData {
  id: string
  fullname: string
  document: string
  birthday: string
  userId: string
  avatarUrl: string
  profession: string
}

interface Hability {
  id: string
  name: string
  slug: string
  userId: string
  value: number
}

interface Contact {
  id: string
  name: string
  phone: string
  userId: string
  socialMedias: SocialMedia[]
}

interface SocialMedia {
  id: string
  name: string
  url: string
  contactId: string
}

interface AcademicEducation {
  id: string
  title: string
  university: string
  description: string
  dateInit: string
  dateEnd: string
  userId: string
}

interface Address {
  id: string
  street: string
  number: string
  district: string
  city: string
  state: string
  country: string
  zipcode: string
  userId: string
}

interface ProfessionalExperience {
  id: string
  title: string
  company: string
  description: Description[]
  dateInit: string
  dateEnd: string
  isActualJob: boolean
  userId: string
}

interface ProfessionalExperienceProps {
  role: string
  date: string
  location: string
  description: string[]
}

interface AcademicEducationsProps {
  degree: string
  date: string
  location: string
  description: string
}

interface Description {
  id: string
  description: string
  professionalExperienceId: string
}

interface Language {
  id: string
  name: string
  slug: string
  userId: string
  stars: number
}

export interface ICurriculo {
  id: string
  name: string
  email: string
  bio: string
  personalData: PersonalData[]
  habilities: Hability[]
  contacts: Contact[]
  academicEducations: AcademicEducation[]
  address: Address[]
  professionalExperiences: ProfessionalExperience[]
  languages: Language[]
  professionalExperienceProps?: ProfessionalExperienceProps[]
  academicEducationsProps?: AcademicEducationsProps[]
}

interface CurriculoContextData {
  curriculo: ICurriculo
  setCurriculoUser: Dispatch<SetStateAction<ICurriculo>>
}

interface Props {
  children: React.ReactNode
}

export const CurriculoContext = createContext<CurriculoContextData>(
  {} as CurriculoContextData
)

export function CurriculoProvider({ children }: Props) {
  const [curriculoUser, setCurriculoUser] = useState<ICurriculo>(
    {} as ICurriculo
  )

  useEffect(() => {
    fetchCurriculo()
  }, [curriculoUser])

  async function fetchCurriculo() {
    const response = await api.get(
      '/users/6e31accd-1054-4cd4-ab34-f8d56da8e172'
    )

    setCurriculoUser(response.data)
  }

  return (
    <CurriculoContext.Provider
      value={{ curriculo: curriculoUser, setCurriculoUser }}
    >
      {children}
    </CurriculoContext.Provider>
  )
}

export function useCurriculo() {
  const context = useContext(CurriculoContext)
  if (!context) {
    throw new Error(
      'useCurriculo deve ser usado dentro de um CurriculoProvider'
    )
  }
  return context
}
