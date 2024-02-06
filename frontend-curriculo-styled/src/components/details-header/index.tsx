import React from 'react'
import { ContainerDetails } from './style'
import {
  FiUser,
  FiBook,
  FiStar,
  FiGlobe,
  FiPhone,
  FiLink,
  FiMail
} from 'react-icons/fi'

import { AiOutlineWhatsApp, AiFillHome, AiFillLinkedin } from 'react-icons/ai'

interface TitleProps {
  name: string
  nameIcon?: string
}

const DetailsHeader: React.FC<TitleProps> = ({ name, nameIcon }) => {
  function iconSearch(nameIcon: string) {
    switch (nameIcon) {
      case 'mail':
        return <FiMail size={20} />
      case 'zap':
        return <AiOutlineWhatsApp size={20} />
      case 'home':
        return <AiFillHome size={20} />
      case 'linkedin':
        return <AiFillLinkedin size={20} />
      case 'IDIOMAS':
        return <FiGlobe size={20} />
      case 'CONTATO':
        return <FiPhone size={20} />
      case 'REDES SOCIAIS':
        return <FiLink size={20} />
      default:
        return <FiUser size={20} />
    }
  }

  return (
    <ContainerDetails>
      {iconSearch(nameIcon)}
      <h4>{name}</h4>
    </ContainerDetails>
  )
}

export default DetailsHeader
