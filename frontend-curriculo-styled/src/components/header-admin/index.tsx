import { ContainerHeaderAdmin, HeaderAdminBar, ContainerMenu } from './style'
import { IoSettingsSharp } from 'react-icons/io5'

interface UserProps {
  name: string
}

const HeaderAdmin: React.FC<UserProps> = ({ name }) => {
  return (
    <ContainerHeaderAdmin>
      <HeaderAdminBar>
        <h3>Admin</h3>
        <ContainerMenu>
          <h5>{name}</h5>
          <a href="#">
            <IoSettingsSharp />
          </a>
        </ContainerMenu>
      </HeaderAdminBar>
    </ContainerHeaderAdmin>
  )
}

export default HeaderAdmin
