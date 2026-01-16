import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filter'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(setTermo(evento.target.value))}
        />
        <S.Filter>
          <FilterCard legend="Pendentes" adder={1} />
          <FilterCard legend="Concluidas" adder={2} />
          <FilterCard legend="Urgentes" adder={3} />
          <FilterCard legend="Importantes" adder={4} />
          <FilterCard legend="Normal" adder={5} />
          <FilterCard legend="Todas" adder={15} active />
        </S.Filter>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
