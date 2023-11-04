import ReactDOM from 'react-dom/client'
import './index.css'
import { DataContextProvider } from './context/DataContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
)
