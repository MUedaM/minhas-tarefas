import * as S from './styles'

export type Props = {
  active?: boolean
  adder: number
  legend: string
}

const FilterCard = ({ active, adder, legend }: Props) => (
  <S.Card active={active}>
    <S.Adder>{adder}</S.Adder>
    <S.Label>{legend}</S.Label>
  </S.Card>
)

export default FilterCard
