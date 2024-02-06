import {
  ContainerCenter,
  ContainerColumnOne,
  ContainerColumnTwo,
  ContainerRowSecond,
  DetailsAndImages,
  ContainerImage,
  ContainerDetails
} from './styles'
import Image from 'next/image'

import Bio from '../bio'
import { useState, useEffect } from 'react'
import Skills from '../skills/skills'

import Languages from '../languages'
import DetailsHeader from '../details-header'
import HeaderAdmin from '../header-admin'
import { ICurriculo, useCurriculo } from '@contexts/curriculo.context'

const Curriculo: React.FC = () => {
  const [userDetails, setUserDetails] = useState<ICurriculo>()
  const { curriculo, setCurriculoUser } = useCurriculo()

  useEffect(() => {
    searchUser()
  }, [])

  async function searchUser() {
    if (!curriculo) {
      console.log(curriculo)
    }

    console.log(curriculo)

    const exp = curriculo?.professionalExperiences?.map(experience => {
      const description = experience.description?.map(description => {
        return description?.description
      })

      return {
        role: experience.title,
        date: `${experience.dateInit} - ${experience.dateEnd}`,
        location: experience.company,
        description
      }
    })

    const form = curriculo?.academicEducations?.map(formation => {
      return {
        degree: formation.title,
        date: `${formation.dateInit} - ${formation.dateEnd}`,
        location: formation.university,
        description: formation.description
      }
    })

    setUserDetails({
      ...curriculo,
      professionalExperienceProps: exp,
      academicEducationsProps: form
    })
    setCurriculoUser(curriculo)
  }

  return (
    <>
      <HeaderAdmin name={curriculo && curriculo.name} />
      <DetailsAndImages>
        <ContainerImage>
          <Image
            src={curriculo && curriculo?.personalData?.[0].avatarUrl}
            alt="superman"
            width={300}
            height={300}
          />
        </ContainerImage>
        <ContainerDetails>
          <h1>{curriculo && curriculo?.name}</h1>
          <h3>{curriculo && curriculo?.personalData?.[0].profession}</h3>
          <DetailsHeader name={curriculo && curriculo?.email} nameIcon="mail" />
          <DetailsHeader
            name={curriculo && curriculo?.contacts?.[0].phone}
            nameIcon="zap"
          />

          <DetailsHeader
            name={`${curriculo && curriculo?.address?.[0].street}, ${
              curriculo && curriculo?.address?.[0].number
            }, ${curriculo && curriculo?.address?.[0].district}`}
            nameIcon="home"
          />
          <DetailsHeader
            name={
              curriculo &&
              curriculo?.contacts?.[0].socialMedias.find(
                social => social.name === 'LinkedIn'
              ).url
            }
            nameIcon="linkedin"
          />
        </ContainerDetails>
      </DetailsAndImages>
      <ContainerCenter>
        <ContainerRowSecond>
          <ContainerColumnOne>
            <Skills />
            <Languages />
          </ContainerColumnOne>
          <ContainerColumnTwo>
            <Bio title="PERFIL" type="bio">
              {curriculo && curriculo?.bio}
            </Bio>
            <Bio
              title="EXPERIÊNCIA"
              type="experience"
              dataExperience={
                userDetails && userDetails?.professionalExperienceProps
              }
            />

            <Bio
              title="FORMAÇÃO"
              type="formation"
              dataFormation={
                userDetails && userDetails?.academicEducationsProps
              }
            />
          </ContainerColumnTwo>
        </ContainerRowSecond>
      </ContainerCenter>
    </>
  )
}

export default Curriculo

interface PersonalData {
  id: string
  fullname: string
  document: string
  birthday: string
  userId: string
  avatarUrl: string
  profession: string
}

interface Habilities {
  id: string
  name: string
  slug: string
  userId: string
}

interface SocialMedias {
  id: string
  name: string
  url: string
  contactId: string
}

interface Contacts {
  id: string
  name: string
  phone: string
  userId: string
  socialMedias: SocialMedias[]
}

interface AcademicEducations {
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

interface ProfessionalExperiences {
  id: string
  title: string
  company: string
  dateInit: string
  dateEnd: string
  isActualJob: boolean
  userId: string
  description?: IDescription[]
}

interface ProfessionalExp {
  role: string
  date: string
  location: string
  description: string[]
}

interface Languages {
  id: string
  name: string
  slug: string
  userId: string
}

interface User {
  id: string
  name: string
  email: string
  bio: string
  personalData?: PersonalData[]
  habilities?: Habilities[]
  contacts?: Contacts[]
  academicEducations?: AcademicEducations[]
  address?: Address[]
  professionalExperiences?: ProfessionalExperiences[]
  languages?: Languages[]
  professionalExp?: ProfessionalExp[]
  formation: IFormation[]
}

interface IDescription {
  id: string
  description: string
  userId: string
  professionalExperiencesId: string
}

interface IFormation {
  degree: string
  date: string
  location: string
  description: string
}
