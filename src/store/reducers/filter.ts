import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  termo: string
  criterio: 'alert' | 'status' | 'all'
  valor?: enums.Alert | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'all'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { setTermo } = FilterSlice.actions

export default FilterSlice.reducer
