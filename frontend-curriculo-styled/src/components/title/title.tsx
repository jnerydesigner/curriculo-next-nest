import { ContainerTitle } from './styles'

interface TitleProps {
  name: string
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <ContainerTitle>
      <h3>{name}</h3>
    </ContainerTitle>
  )
}

export default Title
