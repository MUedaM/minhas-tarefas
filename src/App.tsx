import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import GlobalStyle, { Container } from './styles/global'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App
