import styled from 'styled-components'

type ProgressProps = {
  value: number
  max: string
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
`

export const ContainerStars = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const ContainerLanguage = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const ContainerSkills = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const SkillsDetails = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  h3 {
    text-align: right;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
`

export const ProgressBar = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 10px;
  background-color: #fff;
  margin-top: 10px;
`

export const Progress = styled.div<ProgressProps>`
  width: ${props => props.value}%;
  height: 10px;
  background-color: #01a3a4;
`
