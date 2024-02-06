import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const ContainerCenter = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fff;
`

export const ContainerRow = styled.div`
  width: 100%;
  max-width: 900px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  position: relative;
`

export const ContainerColumnOne = styled.div`
  width: 40%;
  max-width: 900px;
  height: 1060px;
  max-height: 1100px;
  padding-top: 10px;

  background-color: #2d3436;
`

export const ContainerColumnTwo = styled.div`
  width: 60%;
  max-width: 900px;

  background-color: azure;
`

export const ContainerDetailsAndImages = styled.div`
  width: 90%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DetailsAndImages = styled.div`
  margin: 0 auto;
  width: 70%;
  max-width: 900px;
  height: 340px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #01a3a4;
  padding: 10px;

  border: 10px solid #fff;
`

export const LineSeparator = styled.div`
  margin: 0 auto;
  width: 70%;
  max-width: 900px;
  height: 6px;
  background-color: #01a3a4;
`

export const ContainerImage = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #2d3436;
  border-radius: 50%;
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const ContainerDetails = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  color: #fff !important;
  h1 {
    font-size: 70px;
    color: #fff !important;
  }

  h3 {
    margin-bottom: 20px;
  }
`

export const ContainerDetailsRow = styled.div`
  width: 60%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 10px;
  margin-bottom: 5px;

  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  h4 {
    font-size: 15px;
    flex: 1;
    text-align: center;
  }
`

export const ContainerRowSecond = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`

export const ContainerColumnOnePartTwo = styled.div`
  width: 40%;
  max-width: 900px;
  height: auto;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #2d3436;
`

export const ContainerColumnTwoPartTwo = styled.div`
  width: 60%;
  max-width: 900px;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  background-color: #ffff;
`

export const PRole = styled.p`
  font-size: 30px;
`
