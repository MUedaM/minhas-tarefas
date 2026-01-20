import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { setFilter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterio: 'Alert' | 'Status' | 'All'
  valor?: enums.Alert | enums.Status
}

const FilterCard = ({ legend, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, tarefas } = useSelector((state: RootReducer) => state)
  // Alteração realizada para evitar conflito no navegador
  // const { filter, tarefas } = useSelector((state: RootReducer) => state)

  const verificationActive = () => {
    const sameCriterio = filter.criterio === criterio
    const sameValor = filter.valor === valor

    return sameCriterio && sameValor
  }

  const adderTarefas = () => {
    if (criterio === 'All') return tarefas.itens.length
    if (criterio === 'Alert')
      return tarefas.itens.filter((i) => i.alert === valor).length
    if (criterio === 'Status')
      return tarefas.itens.filter((i) => i.status === valor).length
  }

  const filterDispatch = () => {
    dispatch(
      setFilter({
        criterio,
        valor
      })
    )
  }

  const active = verificationActive()
  const adder = adderTarefas()

  return (
    <S.Card active={active} onClick={filterDispatch}>
      <S.Adder>{adder}</S.Adder>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default FilterCard
