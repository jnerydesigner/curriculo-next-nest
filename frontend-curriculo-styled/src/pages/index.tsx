import React from 'react'
import Head from 'next/head'
import { ContainerHome } from '../styles/pages/Home'
import Curriculo from '../components/curriculo'

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Head>
        <title>Curriculo</title>
      </Head>

      <Curriculo />
    </ContainerHome>
  )
}

export default Home
