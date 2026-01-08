import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'

import * as enums from '../../utils/enums/Tarefa'

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Fazer compra do mês',
      enums.Alert.NIVEL_2,
      enums.Status.PENDING,
      'Ir ao mercado no primeiro dia do mês após receber o salário',
      1
    ),

    new Tarefa(
      'Estudar para a prova de matemática',
      enums.Alert.NIVEL_3,
      enums.Status.PENDING,
      'Revisar os capítulos 4, 5 e 6 do livro didático',
      2
    ),

    new Tarefa(
      'Limpar a casa',
      enums.Alert.NIVEL_1,
      enums.Status.COMPLETED,
      'Limpar a casa inteira',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = TarefasSlice.actions

export default TarefasSlice.reducer
