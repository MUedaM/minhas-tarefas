import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../styles/colors'

export const Button = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${Colors.colorTagGreen};
  color: ${Colors.colorText};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 40px;
`
