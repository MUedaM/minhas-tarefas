import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

type props = {
  title: string
  alert: enums.Alert
  status: enums.Status
  description: string
}

const Tarefa = ({ title, alert, status, description }: props) => {
  const [Editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="alert" alert={alert}>
        {alert}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} placeholder="Descrição da tarefa" />
      <S.ActionBar>
        {Editing ? (
          <>
            <S.ButtonSave onClick={() => setEditing(false)}>
              Salvar
            </S.ButtonSave>
            <S.ButtonRemoveCancel onClick={() => setEditing(false)}>
              Cancelar
            </S.ButtonRemoveCancel>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.ButtonRemoveCancel onClick={() => setEditing(true)}>
              Remover
            </S.ButtonRemoveCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
