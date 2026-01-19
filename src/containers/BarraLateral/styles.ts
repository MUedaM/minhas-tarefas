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
