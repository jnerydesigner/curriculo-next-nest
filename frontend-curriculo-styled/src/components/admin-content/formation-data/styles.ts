import styled from 'styled-components'

interface PropsFormation {
  status: 'edit' | 'delete'
}

export const ContainerFormation = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
  gap: 20px;
  padding: 20px 0;
  div {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const ContainerRow = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  a {
    color: ${props => props.theme.colors.text};
    &:hover {
      svg {
        color: red;
      }
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
  a:nth-child(1) {
    margin-right: 10px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-size: 12px;
  }

  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.bg};
    font-size: 12px;
  }
  tr {
    background-color: ${props => props.theme.colors.table_row_principal};
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    font-size: 14px;
  }
`
