import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: 'Fazer compra do mês',
      alert: enums.Alert.NIVEL_2,
      status: enums.Status.COMPLETED,
      description: 'Ir ao mercado no primeiro dia do mês após receber o salário'
    },
    {
      id: 2,
      title: 'Estudar para a prova de matemática',
      alert: enums.Alert.NIVEL_3,
      status: enums.Status.PENDING,
      description: 'Revisar os capítulos 4, 5 e 6 do livro didático'
    },
    {
      id: 3,
      title: 'Limpar a casa',
      alert: enums.Alert.NIVEL_1,
      status: enums.Status.COMPLETED,
      description: 'Limpar a casa inteira'
    }
  ]
}

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaExistente = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (tarefaExistente) {
        alert('Já existe uma tarefa com esse título.')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remove, edit, cadastrar } = TarefasSlice.actions

export default TarefasSlice.reducer
