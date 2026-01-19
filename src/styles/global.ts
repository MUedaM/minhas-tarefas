import styled, { createGlobalStyle } from 'styled-components'
import Colors from './colors'
import { Button } from '../components/Tarefa/styles'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  color: ${Colors.colorInput};
  border: 1px solid ${Colors.colorInput};

  &::placeholder {
    color: ${Colors.colorInput};
    opacity: 1;
  }

  &:focus {
    outline: none;
    color: ${Colors.colorCardTextActive};
    border: 1px solid ${Colors.colorBorderActive};

    &::placeholder {
      color: ${Colors.colorCardTextActive};
      opacity: 1;
    }
  }
`

export const ButtonSave = styled(Button)`
  background-color: ${Colors.colorTagGreen};
`

export default GlobalStyle
