import React from 'react'

import {
  Container,
  ContainerHeaderHead,
  ContainerRowAdmin,
  ContainerHeaderContent
} from './style'

import NavbarAdmin from './navbar'
import ContentAdmin from './content-admin'

interface AdminContentProps {
  children?: React.ReactNode
}

const AdminContent: React.FC<AdminContentProps> = ({ children }) => {
  return (
    <Container>
      <ContainerRowAdmin>
        <ContainerHeaderHead>
          <h2>Header</h2>
        </ContainerHeaderHead>
        <NavbarAdmin />

        <ContainerHeaderContent>
          <ContentAdmin />
        </ContainerHeaderContent>
      </ContainerRowAdmin>
    </Container>
  )
}

export default AdminContent
