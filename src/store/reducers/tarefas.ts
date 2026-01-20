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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExistente = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (tarefaExistente) {
        alert('Já existe uma tarefa com esse título.')
      } else {
        const lastTarefa = state.itens[state.itens.length - 1]
        const novoId = lastTarefa ? lastTarefa.id + 1 : 1
        const novaTarefa: Tarefa = {
          id: novoId,
          ...action.payload
        }
        state.itens.push(novaTarefa)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finished
          ? enums.Status.COMPLETED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, cadastrar, changeStatus } = TarefasSlice.actions

export default TarefasSlice.reducer
