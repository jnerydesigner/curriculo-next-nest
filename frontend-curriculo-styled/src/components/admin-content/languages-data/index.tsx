import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import Input from '../input'
import { Button } from '../button'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaStar, FaRegStar, FaEdit } from 'react-icons/fa'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from 'src/components/@/components/ui/table'
import { useCurriculo } from '@contexts/curriculo.context'
import { api } from 'src/helpers/api'

const createLanguagesSchema = z.object({
  name: z.string(),
  stars: z.string().transform(val => {
    return parseInt(val)
  })
})

type FormData = z.infer<typeof createLanguagesSchema>
const userId = '6e31accd-1054-4cd4-ab34-f8d56da8e172'

interface Props extends FormData {
  userId: string
}

export default function LanguagesData() {
  const { curriculo, setCurriculoUser } = useCurriculo()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(createLanguagesSchema)
  })

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    const { languages, stars } = e.target

    const dataFull: Props = {
      ...data,
      userId
    }

    try {
      await api.post('http://localhost:3001/v1/curriculo/languages', dataFull)

      const responseCurriculo = await api.get(
        '/users/6e31accd-1054-4cd4-ab34-f8d56da8e172'
      )

      setCurriculoUser(responseCurriculo.data)
      languages.value = ''
      stars.value = ''
    } catch (error) {
      console.log(error)
    }
  }

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

  async function deleteLanguage(id: string) {
    try {
      await api.delete(`http://localhost:3001/v1/curriculo/languages/${id}`)
      const responseCurriculo = await api.get(
        '/users/6e31accd-1054-4cd4-ab34-f8d56da8e172'
      )

      setCurriculoUser(responseCurriculo.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-90 flex justify-center items-center flex-col mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 p-4 flex flex-col justify-center items-center gap-4 border-2 border-slate-500 rounded bg-slate-200 drop-shadow-md"
        >
          <div className="w-full">
            <Input
              label="languages"
              name="languages"
              place="Digite um idioma"
              title="Adicione um Idioma"
              classProps="bg-slate-300"
              {...register('name')}
            />
          </div>
          <div className="w-full">
            <Input
              label="stars"
              name="stars"
              place="Digite um numero de 1 a 5"
              title="Quanto você avalia seu entendimento do Idioma Inserido"
              type="number"
              classProps="bg-slate-300"
              {...register('stars')}
            />
          </div>

          <Button
            variant="color-personal"
            type="submit"
            classProps="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Insira seu Idioma
          </Button>
        </form>
        <Table className="mt-2">
          <TableCaption>Lista de Idiomas.</TableCaption>
          <TableHeader>
            <TableRow className="bg-zinc-200">
              <TableHead className="w-[350px] text-center">Idiomas</TableHead>
              <TableHead className="text-center">
                Estrelas (do mais relevante para o menos relevante)
              </TableHead>
              <TableHead className="text-center">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {curriculo &&
              curriculo?.languages?.map(language => {
                return (
                  <TableRow key={language.id}>
                    <TableCell className="font-medium text-center">
                      {language.name}
                    </TableCell>
                    <TableCell className="text-center flex justify-center items-center flex-row">
                      {renderStars(language.stars)}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center items-center flex-row">
                        <FaEdit className="text-xl mr-3 cursor-pointer hover:fill-indigo-600" />
                        <MdOutlineDeleteOutline
                          className="text-xl cursor-pointer
                          hover:fill-rose-600"
                          onClick={() => deleteLanguage(language.id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
