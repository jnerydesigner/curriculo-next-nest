import React from 'react'
import { ContainerFormation, StyledTable, ContainerRow } from './styles'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineDelete, MdOutlineDeleteOutline } from 'react-icons/md'
import Input from '../../input'
import Form from '../../form'
import { useCurriculo } from '@contexts/curriculo.context'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@ui-components/components/ui/table'

export default function FormationData() {
  const { curriculo } = useCurriculo()

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  return (
    <ContainerFormation>
      <Input
        label="Buscar Termos"
        name="inputSearch"
        placeholder="Digite sua Busca"
        type="text"
      />
      {/* <StyledTable>
          <tr>
            <th>Título da Formação</th>
            <th>Universidade</th>
            <th>Início</th>
            <th>Término</th>
            <th>Ações</th>
          </tr>
          {curriculo.academicEducations.map(form => (
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
                </Link><TableCaption>Lista de Idiomas.</TableCaption>
              </td>
            </tr>
          ))}
        </StyledTable> */}

      <Table className="mt-2">
        <TableCaption>Lista de Idiomas.</TableCaption>
        <TableHeader>
          <TableRow className="bg-zinc-200">
            <TableHead className="w-[350px] text-center">Curso</TableHead>
            <TableHead className="text-center">Universidade</TableHead>
            <TableHead className="text-center">Início</TableHead>
            <TableHead className="text-center">Termino</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {curriculo &&
            curriculo?.academicEducations?.map(academic => {
              return (
                <TableRow key={academic.id}>
                  <TableCell className="font-medium text-center">
                    {academic.title}s
                  </TableCell>

                  <TableCell className="text-center flex justify-center items-center flex-row">
                    {academic.university}
                  </TableCell>

                  <TableCell className="text-center flex justify-center items-center flex-row">
                    {formatDate(academic.dateInit)}
                  </TableCell>

                  <TableCell className="text-center flex justify-center items-center flex-row">
                    {formatDate(academic.dateEnd)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>

      <ContainerRow>
        <Form />
      </ContainerRow>
    </ContainerFormation>
  )
}
