import { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remove, edit, changeStatus } from '../../store/reducers/tarefas'
import TarefaType from '../../models/tarefa'
import { Button, ButtonSave } from '../../styles/global'
import * as enums from '../../utils/enums/Tarefa'

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

  function setPending(e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, finished: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.COMPLETED}
          onChange={setPending}
          disabled={editing}
        />
        {editing ? (
          <>
            <S.Evidence>EDITANDO...</S.Evidence>
            <S.TitleEditing
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        ) : (
          <S.Title>{title}</S.Title>
        )}
      </label>
      <S.Tag $parameter="alert" $alert={alert}>
        {alert}
      </S.Tag>
      <S.Tag $parameter="status" $status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <ButtonSave
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
            </ButtonSave>
            <S.ButtonRemoveCancel onClick={cancelEditing}>
              Cancelar
            </S.ButtonRemoveCancel>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
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
