import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container, Result } from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTarefas = () => {
    let tarefasFilters = itens
    if (termo !== undefined) {
      tarefasFilters = tarefasFilters.filter(
        (i) => i.title.toLowerCase().search((termo || '').toLowerCase()) >= 0
      )

      if (criterio === 'Alert') {
        tarefasFilters = tarefasFilters.filter((i) => i.alert === valor)
      } else if (criterio === 'Status') {
        tarefasFilters = tarefasFilters.filter((i) => i.status === valor)
      }

      return tarefasFilters
    } else {
      return itens
    }
  }

  const showResultFilter = (quantity: number) => {
    let message = ''
    const complementation =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'All') {
      if (quantity > 1) {
        message = `${quantity} tarefas encontradas como: Todas ${complementation}`
      } else {
        message = `${quantity} tarefa encontrada como: Todas ${complementation}`
      }
    } else {
      if (quantity > 1) {
        message = `${quantity} tarefas encontradas como: "${`${criterio} = ${valor}`}" ${complementation}`
      } else {
        message = `${quantity} tarefa encontrada como: "${`${criterio} = ${valor}`}" ${complementation}`
      }
    }

    return message
  }

  const tarefas = filterTarefas()
  const message = showResultFilter(tarefas.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {tarefas.map((t) => (
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
