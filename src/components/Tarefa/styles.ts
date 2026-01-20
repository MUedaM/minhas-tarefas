import styled from 'styled-components'
import Colors from '../../styles/colors'

import * as enums from '../../utils/enums/Tarefa'
import { Button } from '../../styles/global'

type TagProps = {
  $alert?: enums.Alert
  $status?: enums.Status
  $parameter: 'status' | 'alert'
}

function getTagBackgroundColor(props: TagProps): string {
  if (props.$parameter === 'alert') {
    if (props.$alert === enums.Alert.NIVEL_3) return Colors.colorTagRed
    if (props.$alert === enums.Alert.NIVEL_2) return Colors.colorTagYellow2
  } else if (props.$parameter === 'status') {
    if (props.$status === enums.Status.PENDING) return Colors.colorTagYellow1
    if (props.$status === enums.Status.COMPLETED) return Colors.colorTagGreen
  }
  return Colors.colorTagGray
}

export const Card = styled.div`
  background-color: ${Colors.colorBackgroundSecundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
  }
`
export const Evidence = styled.em`
  font-size: 18px;
  color: ${Colors.colorTextArea};
  line-height: 24px;
  margin-left: 8px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weigtht: bold;
  text-transform: uppercase;
  color: ${Colors.colorTextArea};
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  border: 1px solid transparent;
  background-color: transparent;
  max-height: 35px;
  overflow: hidden;
  padding: 4px;
  margin-left: 8px;
  cursor: pointer;
  alingn-items: center;
`

export const TitleEditing = styled.textarea`
  font-size: 18px;
  font-weigtht: bold;
  text-transform: uppercase;
  color: ${Colors.colorTextArea};
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: 1px solid transparent;
  background-color: transparent;
  max-height: 34px;
  overflow: hidden;
  padding: 3.5px;
  margin-left: 8.5px;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${Colors.colorText};
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => getTagBackgroundColor(props)};
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: ${Colors.colorTextArea};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border-color: transparent;
  background-color: transparent;
  padding: 8px;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonRemoveCancel = styled(Button)`
  background-color: ${Colors.colorTagRed};
`
