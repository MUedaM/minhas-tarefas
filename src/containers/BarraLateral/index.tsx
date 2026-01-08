import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
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

export default BarraLateral
