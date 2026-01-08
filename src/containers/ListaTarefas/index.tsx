import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Tarefa
              title={t.title}
              alert={t.alert}
              status={t.status}
              description={t.description}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaTarefas
