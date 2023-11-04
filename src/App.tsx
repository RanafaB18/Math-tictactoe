import GameGrid from "./components/GameGrid";
import Player from "./components/Player";
import { DataContextProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <main className="w-screen h-screen flex flex-col justify-around">
        <GameGrid />
        <Player />
      </main>
    </DataContextProvider>
  );
};

export default App;
