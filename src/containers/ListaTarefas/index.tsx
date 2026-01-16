import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.title}>
            <Tarefa
              id={t.id}
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
