import Link from 'next/link'
import { ContainerHeaderNav } from '../style'
import { FaHome, FaUser, FaRunning } from 'react-icons/fa'
import { FiBookOpen } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { GrUserWorker } from 'react-icons/gr'
import { VscProject } from 'react-icons/vsc'
import { TbSocial } from 'react-icons/tb'

const NavbarAdmin: React.FC = () => {
  return (
    <ContainerHeaderNav>
      <ul>
        <li>
          <Link href="/admin">
            <div>
              <FaHome />
            </div>
            <div>
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/personal">
            <div>
              <FaUser />
            </div>
            <div>
              <span>Dados Pessoais</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={`/admin/formation`}>
            <div>
              <FiBookOpen />
            </div>
            <div>
              <span>Formação</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/experience">
            <div>
              <GrUserWorker />
            </div>
            <div>
              <span>Experiência</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/habilities">
            <div>
              <FaRunning />
            </div>

            <div>
              <span>Habilidades</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/languages">
            <div>
              <HiOutlineLightBulb />
            </div>
            <div>
              <span>Idiomas</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/courses">
            <div>
              <FiBookOpen />
            </div>
            <div>
              <span>Cursos</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/projects">
            <div>
              <VscProject />
            </div>
            <div>
              <span>Projetos</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/social-medias">
            <div>
              <TbSocial />
            </div>
            <div>
              <span>Redes Sociais</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/bio">
            <div>
              <TbSocial />
            </div>
            <div>
              <span>Bio</span>
            </div>
          </Link>
        </li>
      </ul>
    </ContainerHeaderNav>
  )
}

export default NavbarAdmin
