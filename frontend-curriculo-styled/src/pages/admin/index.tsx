import React from 'react'
import Head from 'next/head'

import { ContainerAdmin } from '../../styles/pages/Admin'
import AdminContent from '../../components/admin-content'

const Admin: React.FC = () => {
  return (
    <ContainerAdmin>
      <Head>
        <title>Curriculo - Admin</title>
      </Head>

      <AdminContent />
    </ContainerAdmin>
  )
}

export default Admin
