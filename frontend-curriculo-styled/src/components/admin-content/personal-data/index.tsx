import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { GeneralProps } from '../content-admin'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatDate } from 'src/helpers/format-date'
import Input from '../input'
import { Button } from '../button'
import { useCurriculo } from '@contexts/curriculo.context'

const createPersonalDataSchema = z.object({
  fullname: z.string().optional(),
  document: z.string().optional(),
  birthday: z.string().optional(),
  profession: z.string().optional(),
  nickname: z.string().optional()
})

type FormData = z.infer<typeof createPersonalDataSchema>

const idPersonal = '878c82aa-863f-444f-a6e6-58caf6389b59'

interface Props extends FormData {
  idPersonal: string
}

interface IPersonalData {
  id: string
  fullname: string
  document: string
  birthday: string
  userId: string
  avatarUrl: string
  profession: string
}

const PersonalData: React.FC<GeneralProps> = ({ title }) => {
  const [personalData, setPersonalData] = useState<IPersonalData>()
  const [personal, setPersonal] = useState<IPersonalData>()

  const { setCurriculoUser, curriculo } = useCurriculo()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(createPersonalDataSchema)
  })
  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/v1/curriculo/personal-data/878c82aa-863f-444f-a6e6-58caf6389b59'
        )

        setPersonal(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPersonalData()
  }, [personalData])

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    const { fullname, profession, document, nickname } = e.target

    const dataFull: Props = {
      ...data,
      idPersonal
    }

    if (fullname.value === '') {
      dataFull.fullname = personal?.fullname
    }
    if (profession.value === '') {
      dataFull.profession = personal?.profession
    }
    if (document.value === '') {
      dataFull.document = personal?.document
    }

    if (nickname.value === '') {
      dataFull.nickname = curriculo.name
    }

    try {
      const response = await axios.patch(
        'http://localhost:3001/v1/curriculo/personal-data/878c82aa-863f-444f-a6e6-58caf6389b59',
        dataFull
      )

      const curriculoResponse = await axios.get(
        'http://localhost:3001/v1/curriculo/users/6e31accd-1054-4cd4-ab34-f8d56da8e172'
      )

      setPersonalData(response.data)
      setCurriculoUser(curriculoResponse.data)
      fullname.value = ''
      profession.value = ''
      document.value = ''
      nickname.value = ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-90 flex justify-center items-center flex-col bg-slate-700">
        <div className="w-100 p-4 flex justify-center items-center mt-2">
          <img
            className="w-20 h-20 rounded-full"
            src={curriculo && curriculo?.personalData?.[0].avatarUrl}
            alt="Rounded avatar"
          />
        </div>
        <div className="w-full mt-2 flex justify-center items-center flex-col gap-1">
          <h1 className="font-bold text-xl">
            {curriculo && curriculo?.personalData?.[0].fullname}
          </h1>
          <h1 className="font-bold text-xl">{curriculo && curriculo?.name}</h1>
          <p>
            Documento:{' '}
            <span className="font-bold">
              {curriculo && curriculo?.personalData?.[0].document}
            </span>
          </p>
          <p>
            Data de Nascimento:{' '}
            <span className="font-bold">
              {formatDate(curriculo && curriculo?.personalData?.[0].birthday)}
            </span>
          </p>
          <p>
            Profissão:{' '}
            <span className="font-bold">
              {curriculo && curriculo?.personalData?.[0].profession}
            </span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 p-4 flex flex-col justify-center items-center gap-4
        border-2 border-slate-500 rounded bg-slate-200 drop-shadow-md mt-2"
        >
          <div className="w-full">
            <Input
              label="fullname"
              name="fullname"
              place="Altere seu nome"
              title="Altere seu nome"
              classProps="bg-slate-300"
              {...register('fullname')}
            />
          </div>

          <div className="w-full">
            <Input
              label="nickname"
              name="nickname"
              place="Altere seu Nickname"
              title="Altere seu Nickname"
              classProps="bg-slate-300"
              {...register('nickname')}
            />
          </div>
          <div className="w-full">
            <Input
              label="profession"
              name="profession"
              place="Altere sua profissão"
              title="Altere sua profissão"
              classProps="bg-slate-300"
              {...register('profession')}
            />
          </div>

          <div className="w-full">
            <Input
              label="document"
              name="document"
              place="Altere seu documento"
              title="Altere seu documento"
              classProps="bg-slate-300"
              {...register('document')}
            />
          </div>
          <Button
            variant="color-personal"
            type="submit"
            classProps="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Salvar
          </Button>
        </form>
      </div>
    </>
  )
}

export default PersonalData
