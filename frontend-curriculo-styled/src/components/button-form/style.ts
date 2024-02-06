import styled from 'styled-components'

export const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: azure;
  padding: 1rem;
  border-radius: 0.5rem;

  button {
    width: 50%;
    height: 30px;
    outline: none;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    &:hover {
      cursor: pointer;
    }
  }
`
