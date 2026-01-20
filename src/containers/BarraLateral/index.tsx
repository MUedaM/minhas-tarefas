import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filter'
import * as S from './styles'
import { Button, Input } from '../../styles/global'
import * as enums from '../../utils/enums/Tarefa'
import { useNavigate } from 'react-router-dom'

type props = {
  showFilters: boolean
}

const BarraLateral = ({ showFilters }: props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(setTermo(evento.target.value))}
            />
            <S.Filter>
              <FilterCard
                valor={enums.Status.PENDING}
                criterio="Status"
                legend="Pendentes"
              />
              <FilterCard
                valor={enums.Status.COMPLETED}
                criterio="Status"
                legend="Concluidas"
              />
              <FilterCard
                valor={enums.Alert.NIVEL_3}
                criterio="Alert"
                legend="Urgentes"
              />
              <FilterCard
                valor={enums.Alert.NIVEL_2}
                criterio="Alert"
                legend="Importantes"
              />
              <FilterCard
                valor={enums.Alert.NIVEL_1}
                criterio="Alert"
                legend="Normal"
              />
              <FilterCard criterio="All" legend="Todas" />
            </S.Filter>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
