import styled from 'styled-components'

const heightHeader = `150px`

export const ContainerHeader = styled.div`
  width: 70%;
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const ContainerContent = styled.div`
  width: 70%;
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

export const ContainerProfile = styled.div`
  width: 30%;
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

export const ContainerLogo = styled.div`
  width: 100px;
  height: ${props => props.theme.header.height};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: azure;
    background-color: beige;
    width: 100%;
    height: 100%;
  }
`
