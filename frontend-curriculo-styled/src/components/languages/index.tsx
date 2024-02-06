import Title from '../title/title'

import { Container, ContainerStars, ContainerLanguage } from './syles'
import { useCurriculo } from '@contexts/curriculo.context'
import { FaStar, FaRegStar } from 'react-icons/fa'

const Languages: React.FC = () => {
  const { curriculo } = useCurriculo()

  function renderStars(stars: number) {
    const starsArray = []

    for (let i = 0; i < stars; i++) {
      starsArray.push(<FaStar className="fill-amber-500" />)
    }

    for (let i = 0; i < 5 - stars; i++) {
      starsArray.push(<FaRegStar className="fill-amber-500" />)
    }

    return starsArray
  }

  return (
    <Container>
      <Title name="LINGUAGENS" />
      {curriculo &&
        curriculo?.languages?.map(item => (
          <ContainerLanguage key={item.id}>
            <h2>{item.name}</h2>
            <ContainerStars>{renderStars(item.stars)}</ContainerStars>
          </ContainerLanguage>
        ))}
    </Container>
  )
}

export default Languages
