import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100vh;

  background-color: ${props => props.theme.colors.bg};
`

export const ContainerRowAdmin = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    'header header'
    'nav content';
`

export const ContainerHeaderHead = styled.div`
  grid-area: header;
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const ContainerHeaderNav = styled.div`
  grid-area: nav;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;

    width: 100%;
    li {
      width: 100%;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        text-decoration: none;
        color: ${props => props.theme.colors.font_primary};
        background-color: ${props => props.theme.colors.bg};
        padding: 1.2rem;
        height: 20px;
        width: 100%;
        margin-bottom: 0.5rem;

        text-align: center;
        &:hover {
          background-color: ${props => props.theme.colors.primary_cl};
        }

        div:nth-child(1) {
          width: 10%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        div:nth-child(2) {
          width: 20%;
          height: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            display: flex;
          }
        }
      }
    }
  }
`

export const ContainerHeaderContent = styled.div`
  grid-area: content;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: ${props => props.theme.colors.font_primary};
    font-size: 2rem;
  }

  form {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 1rem;
    width: 500px;
  }
`

export const ContainerHeaderBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
`
