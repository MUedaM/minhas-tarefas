import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  title: string
  alert: enums.Alert
  status: enums.Status
  description: string
  id: number

  constructor(
    title: string,
    alert: enums.Alert,
    status: enums.Status,
    description: string,
    id: number
  ) {
    this.title = title
    this.alert = alert
    this.status = status
    this.description = description
    this.id = id
  }
}

export default Tarefa
