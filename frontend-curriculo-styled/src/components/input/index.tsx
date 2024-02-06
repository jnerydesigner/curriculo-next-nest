import React from 'react'
import { ContainerInput } from './style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type: string
  place?: string
}

const Input: React.FC<InputProps> = ({ name, label, type, place, ...rest }) => {
  return (
    <ContainerInput>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={place} {...rest} />
    </ContainerInput>
  )
}

export default Input
