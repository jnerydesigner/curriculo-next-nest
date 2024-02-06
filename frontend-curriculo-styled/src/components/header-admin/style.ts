import styled from 'styled-components'

export const ContainerHeaderAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderAdminBar = styled.div`
  margin: 0 auto;
  width: 70%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  h5 {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.font_primary};
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`
