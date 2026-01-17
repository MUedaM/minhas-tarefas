import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  termo?: string
  criterio: 'Alert' | 'Status' | 'All'
  valor?: enums.Alert | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'All'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { setTermo, setFilter } = FilterSlice.actions

export default FilterSlice.reducer
