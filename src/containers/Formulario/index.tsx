import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import { ButtonSave, MainContainer, Title } from '../../styles/global'
import { Input } from '../../styles/global'
import { AlertsOption, Form, Options } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [alert, setAlert] = useState(enums.Alert.NIVEL_1)

  const CadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    const NovaTarefa = new Tarefa(
      title,
      alert,
      enums.Status.PENDING,
      description,
      9
    )

    dispatch(cadastrar(NovaTarefa))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <Form onSubmit={CadastrarTarefa}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)} // onChange={(target) => setTitle(target.value)}
          type="text"
          placeholder="Titulo da tarefa"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)} // onChange={(target) => setTitle(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridades</p>
          {Object.values(enums.Alert).map((Alert) => (
            <AlertsOption key={Alert}>
              <input
                value={Alert}
                name="Alert"
                type="radio"
                onChange={(e) => setAlert(e.target.value as enums.Alert)}
                id={Alert}
                defaultChecked={alert === enums.Alert.NIVEL_1}
              />{' '}
              <label htmlFor={Alert}>{Alert}</label>
            </AlertsOption>
          ))}
        </Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  )
}

export default Formulario
