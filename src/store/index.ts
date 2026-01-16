import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filter: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
