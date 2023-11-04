import GameGrid from "./components/GameGrid"
import Player from "./components/Player"

const App = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-around">
      <GameGrid />
      <Player />
    </main>
  )
}

export default App
