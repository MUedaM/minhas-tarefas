import styled from 'styled-components'
import Colors from '../../styles/colors'

import { Props } from '.'

type PropsOmit = Omit<Props, 'adder' | 'legend'>

export const Card = styled.div<PropsOmit>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.active ? Colors.colorBorderActive : Colors.colorBorder)};
  border-radius: 8px;
  background-color: ${(props) =>
    props.active
      ? Colors.colorBackgroundSecundaryActive
      : Colors.colorBackgroundSecundary};
  color: ${(props) =>
    props.active ? Colors.colorCardTextActive : Colors.colorCardText};
  cursor: pointer;
`

export const Adder = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
