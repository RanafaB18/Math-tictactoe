import { Link } from 'react-router-dom'
import { v4 as uuid } from "uuid"
const Home = () => {
    const id = uuid()
  return (
    <Link to={`/tictactoe/${id}`}>TicTacToe</Link>
  )
}

export default Home
