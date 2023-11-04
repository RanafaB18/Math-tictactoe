import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import App from './App'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/tictactoe/:id', element: <App /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
