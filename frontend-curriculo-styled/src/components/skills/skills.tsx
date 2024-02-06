import { useState } from 'react'
import Title from '../title/title'
import {
  Container,
  ContainerSkills,
  SkillsDetails,
  ProgressBar,
  Progress
} from './styles'
import { skills as SkillsFC } from '../skills'
import { useCurriculo } from '@contexts/curriculo.context'

type ProgressProps = {
  value: number
  max: string
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState(SkillsFC)

  const { curriculo } = useCurriculo()

  return (
    <Container>
      <Title name="COMPETÊNCIAS" />
      <ContainerSkills>
        {curriculo?.habilities?.map(item => (
          <SkillsDetails key={item.id}>
            <h3>{item.name}</h3>
            <ProgressBar>
              <Progress value={item.value} max="100" />
            </ProgressBar>
          </SkillsDetails>
        ))}
      </ContainerSkills>
    </Container>
  )
}

export default Skills
