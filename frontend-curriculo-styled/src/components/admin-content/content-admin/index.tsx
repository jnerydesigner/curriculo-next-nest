import { useRouter } from 'next/router'
import PersonalData from '../personal-data'

import FormationData from '../formation-data'

import ExperienceData from '../experience-data'
import HabilitiesData from '../habilities-data'
import LanguagesData from '../languages-data'
import CoursesData from '../courses-data'
import ProjectsData from '../languages-data'
import SocialsMediasData from '../social-medias-data'
import BioData from '../bio'

export interface GeneralProps {
  title?: string
  userId?: string
}

const ContentAdmin: React.FC = () => {
  const router = useRouter()
  const { pathname } = router

  console.log(pathname)

  function renderContent(pathname: string) {
    switch (pathname) {
      case '/admin/personal':
        return (
          <>
            <PersonalData title="Dados Pessoais" />
          </>
        )
      case `/admin/formation`:
        return <FormationData />
      case '/admin/experience':
        return <ExperienceData title="Experiências" />
      case '/admin/habilities':
        return <HabilitiesData title="Habilidades" />
      case '/admin/languages':
        return <LanguagesData />
      case '/admin/courses':
        return <CoursesData title="Cursos" />
      case '/admin/projects':
        return <ProjectsData />
      case '/admin/social-medias':
        return <SocialsMediasData title="Redes Socias" />
      case '/admin/bio':
        return <BioData title="Bio" />
      default:
        return <PersonalData title="Dados Pessoais" />
    }
  }
  return <div>{renderContent(pathname)}</div>
}

export default ContentAdmin
