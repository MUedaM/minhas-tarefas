import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remove, edit } from '../../store/reducers/tarefas'
import TarefaType from '../../models/tarefa'

type props = TarefaType

const Tarefa = ({
  title: titleOriginal,
  alert,
  status,
  description: descriptionOriginal,
  id
}: props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (titleOriginal.length > 0) {
      setTitle(titleOriginal)
    }
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [titleOriginal, descriptionOriginal])

  function cancelEditing() {
    setEditing(false)
    setTitle(titleOriginal)
    setDescription(descriptionOriginal)
  }

  return (
    <S.Card>
      <S.Title
        disabled={!editing}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titulo da tarefa"
      />
      <S.Tag parameter="alert" alert={alert}>
        {alert}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição da tarefa"
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    title,
                    alert,
                    status,
                    description,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </S.ButtonSave>
            <S.ButtonRemoveCancel onClick={cancelEditing}>
              Cancelar
            </S.ButtonRemoveCancel>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.ButtonRemoveCancel onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonRemoveCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
