import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: ${props => props.theme.colors.primary_cl};
    text-align: justify;
    font-size: 14px;
  }
`

export const ContainerDetailsExperience = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const DetailsExperience = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px;
  h3 {
    color: ${props => props.theme.colors.primary_cl};
    font-size: 12px;
  }
  p {
    margin-top: 0;
    color: ${props => props.theme.colors.primary_cl};
    font-size: 12px;
  }
`

export const PRole = styled.p`
  font-size: 30px;
`
export const DataContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h4 {
    color: ${props => props.theme.colors.primary_cl};
    margin-bottom: 10px;
    font-size: 12px;
  }
`

export const StyledList = styled.ul`
  margin-top: 50px;
  list-style: square;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  color: #333;
`

export const StyledListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
`
