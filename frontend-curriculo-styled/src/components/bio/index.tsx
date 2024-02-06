import { formatPeriod } from '../../helpers/format-date'
import Title from '../title/title'
import {
  Container,
  ContainerDetailsExperience,
  DetailsExperience,
  DataContainer,
  StyledList,
  StyledListItem
} from './styles'

interface BioProps {
  title: string
  bio?: string
  children?: React.ReactNode
  type: 'bio' | 'formation' | 'experience'
  dataExperience?: Experience[]
  dataFormation?: Formation[]
}

interface Experience {
  role: string
  date: string
  location: string
  description: string[]
}

interface Formation {
  degree: string
  date: string
  location: string
  description: string
}

const Bio: React.FC<BioProps> = ({
  bio,
  title,
  children,
  type,
  dataExperience,
  dataFormation
}) => {
  function renderBio(type: 'bio' | 'formation' | 'experience') {
    if (type === 'bio') {
      return (
        <Container>
          <Title name={title} />
          <p>{children}</p>
        </Container>
      )
    } else if (type === 'formation') {
      return (
        <Container>
          <Title name={title} />
          {dataFormation &&
            dataFormation.map((item, index) => (
              <ContainerDetailsExperience key={index}>
                <DetailsExperience>
                  <h3>{item.degree}</h3>
                  <p>{formatPeriod(item.date)}</p>
                </DetailsExperience>
                <DataContainer>
                  <h4>{item.location}</h4>
                  <p>{item.description}</p>
                </DataContainer>
              </ContainerDetailsExperience>
            ))}
        </Container>
      )
    } else if (type === 'experience') {
      return (
        <Container>
          <Title name={title} />
          {dataExperience &&
            dataExperience.map((item, index) => (
              <ContainerDetailsExperience key={index}>
                <DetailsExperience>
                  <h3>{item.role}</h3>
                  <p>{formatPeriod(item.date)}</p>
                </DetailsExperience>
                <DataContainer>
                  <h4>{item.location}</h4>
                  <StyledList>
                    {item.description.map((item, index) => (
                      <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                  </StyledList>
                </DataContainer>
              </ContainerDetailsExperience>
            ))}
        </Container>
      )
    }
  }

  return renderBio(type)
}

export default Bio
