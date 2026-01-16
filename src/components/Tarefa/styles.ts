import styled from 'styled-components'
import Colors from '../../styles/colors'

import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  alert?: enums.Alert
  status?: enums.Status
  parametro: 'status' | 'alert'
}

function getTagBackgroundColor(props: TagProps): string {
  if (props.parametro === 'alert') {
    if (props.alert === enums.Alert.NIVEL_3) return Colors.colorTagRed
    if (props.alert === enums.Alert.NIVEL_2) return Colors.colorTagYellow2
  } else if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDING) return Colors.colorTagYellow1
    if (props.status === enums.Status.COMPLETED) return Colors.colorTagGreen
  }
  return Colors.colorTagGray
}

export const Card = styled.div`
  background-color: ${Colors.colorBackgroundSecundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
`

export const Title = styled.textarea`
  font-size: 16px;
  font-weigtht: bold;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${Colors.colorTextArea};
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border-color: transparent;
  background-color: transparent;
  max-height: 35px;
  overflow: hidden;
  padding: 4px;

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

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${Colors.colorText};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${Colors.colorButtonEdit};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${Colors.colorTagGreen};
`

export const ButtonRemoveCancel = styled(Button)`
  background-color: ${Colors.colorTagRed};
`
