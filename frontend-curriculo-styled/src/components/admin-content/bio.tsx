import { useCurriculo } from '@contexts/curriculo.context'
import { GeneralProps } from './content-admin'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormDataAdmin from './formdata'
import { Textarea } from '../@/components/ui/textarea'
import { Button } from './button'
import { api } from 'src/helpers/api'

const createBioSchema = z.object({
  bio: z.string().optional()
})

type FormData = z.infer<typeof createBioSchema>

const idUser = '6e31accd-1054-4cd4-ab34-f8d56da8e172'

interface Props extends FormData {
  idUser: string
}

const BioData: React.FC<GeneralProps> = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(createBioSchema)
  })
  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    const { bio } = e.target

    if (bio === '') {
      bio.value = curriculo?.bio
    }

    try {
      const response = await api.patch(
        `http://localhost:3001/v1/curriculo/users/${idUser}/bio`,
        {
          bio: data.bio
        }
      )

      setCurriculoUser(response.data)
      bio.value = ''
    } catch (error) {
      console.log(error)
    }
  }
  const { curriculo, setCurriculoUser } = useCurriculo()
  return (
    <>
      <div className="w-full h-90 flex justify-center items-center flex-col bg-slate-700 p-2">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-justify p-4 border rounded">
          {curriculo && curriculo?.bio}
        </p>

        <FormDataAdmin onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            placeholder="Escreva um pouco sobre você"
            {...register('bio')}
          />
          <Button
            variant="color-personal"
            type="submit"
            classProps="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Salvar
          </Button>
        </FormDataAdmin>
      </div>
    </>
  )
}

export default BioData
