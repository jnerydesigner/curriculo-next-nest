import React, { useEffect, useState } from 'react'
import { ContainerFormation, StyledTable, ContainerRow } from './styles'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import Input from '../../input'
import TextField from '@mui/material/TextField'
import Form from '../../form'

export default function FormationData() {
  const [formation, setFormation] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'http://localhost:3001/v1/curriculo/academic-education/6e31accd-1054-4cd4-ab34-f8d56da8e172'
      )

      const data = await res.json()
      setFormation(data)
    }

    fetchData()
  }, [])

  if (!formation) {
    return <div>Loading...</div>
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  return (
    <ContainerFormation>
      <ContainerRow>
        <Input
          label="Buscar Termos"
          name="inputSearch"
          placeholder="Digite sua Busca"
          type="text"
        />
        <StyledTable>
          <tr>
            <th>Titulo da Formação</th>
            <th>Universidade</th>
            <th>Início</th>
            <th>Termino</th>
            <th>Ações</th>
          </tr>
          {formation.map(form => (
            <tr key={form.id}>
              <td>{form.title}</td>
              <td>{form.university}</td>
              <td>{formatDate(form.dateInit)}</td>
              <td>{formatDate(form.dateEnd)}</td>
              <td>
                <Link href={`/admin/formation/${form.id}`}>
                  <FaEdit />
                </Link>
                <Link href={`/admin/formation/${form.id}`}>
                  <MdOutlineDelete />
                </Link>
              </td>
            </tr>
          ))}
        </StyledTable>
      </ContainerRow>
      <ContainerRow>
        <Form />
      </ContainerRow>
    </ContainerFormation>
  )
}
