import ReactDOM from 'react-dom/client'

import './app/styles/index.scss'
import App from './app/App'
import { TodosProvider } from './app/providers/TodosProvider'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Контейнер "root" не найден. НЕ удалось вмонтировать приложение')
}

const root = ReactDOM.createRoot(container)
root.render(
  <TodosProvider>
    <App />
  </TodosProvider>,
)
