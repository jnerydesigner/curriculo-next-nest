import { ContainerForm, RowInputs } from './style'
import Input from '../input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import EmptyTextarea from '../textarea'
import ButtonMui from '../button-mui'

const schema = z.object({
  title: z.string(),
  university: z.string(),
  dateInit: z.string(),
  dateEnd: z.string(),
  description: z.string()
})

type FormData = z.infer<typeof schema>

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <RowInputs>
        <Input
          label="Titulo da Formação"
          name="inputSearch"
          placeholder="Digite o tiutlo de sua formação"
          type="text"
          {...register('title')}
        />
        <Input
          label="Instituição de Ensino"
          name="inputSearch"
          placeholder="Digite a Instituiçao de Ensino"
          type="text"
          {...register('university')}
        />
      </RowInputs>

      <RowInputs>
        <Input
          label="Data de Inicio"
          name="inputSearch"
          placeholder="Digite a data de inicio"
          type="text"
          {...register('dateInit')}
        />
        <Input
          label="Data de Fim"
          name="inputSearch"
          placeholder="Digite a data de fim"
          type="text"
          {...register('dateEnd')}
        />
      </RowInputs>
      <RowInputs>
        <EmptyTextarea />
      </RowInputs>
      <RowInputs>
        <button type="submit">Enviar</button>
        {/* <ButtonMui /> */}
      </RowInputs>
    </ContainerForm>
  )
}

export default Form
