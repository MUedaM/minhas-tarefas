import styled from 'styled-components'
import Colors from '../../styles/colors'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${Colors.colorBackgroundPrimary};
  height: 100vh;
`

export const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
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
