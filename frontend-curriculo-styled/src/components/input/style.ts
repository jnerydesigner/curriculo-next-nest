import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 100%;
  height: auto;
  label {
    color: ${props => props.theme.colors.font_primary};
    font-size: 1.2rem;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 0;
    margin-top: 10px;
    &::placeholder {
      color: rgba(178, 190, 195, 0.7);
    }
  }
`
