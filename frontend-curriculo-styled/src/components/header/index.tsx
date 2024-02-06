import Image from 'next/image'
import LogoCurriculo from '../../assets/curriculo.svg'
import {
  ContainerContent,
  ContainerHeader,
  ContainerLogo,
  ContainerProfile
} from './styles'

const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <LogoCurriculo />
      </ContainerLogo>
      <ContainerContent>
        <h3>Content do container</h3>
      </ContainerContent>

      <ContainerProfile>
        <h3>Content do container</h3>
      </ContainerProfile>
    </ContainerHeader>
  )
}

export default Header
