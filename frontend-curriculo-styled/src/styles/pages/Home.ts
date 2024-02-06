import styled from 'styled-components'

export const ContainerHome = styled.div`
  h1 {
    font-size: 120px;
    color: ${props => props.theme.colors.font_primary};
    margin-top: 20px;
  }

  h3 {
    color: ${props => props.theme.colors.font_primary};
  }

  p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.colors.primary};
  }
`
