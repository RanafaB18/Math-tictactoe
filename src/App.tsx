import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import Player from "./components/Player";
import { DataContextProvider } from "./context/DataContext";
import { socket } from "./socket";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const [gameIsFull, setGameIsFull] = useState(false);
  const navigate = useNavigate();
  function gameIsFullHandler() {
    setGameIsFull(true);
  }
  useEffect(() => {
    socket.on("filled-game", gameIsFullHandler);
    if (sessionStorage.getItem("is-reloaded")) {
      navigate('/', { replace: true });
    } else {
      sessionStorage.setItem("is-reloaded", "false");
    }

    return () => {
      socket.off("filled-game", gameIsFullHandler);
    };
  }, []);
  if (gameIsFull) {
    return (
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 border rounded-md w-fit p-6 shadow-md">
          <h1 className="text-3xl">This game has been occupied</h1>
          <Link
            to={"/"}
            className="self-end bg-green-500 text-white py-0.5 px-3 rounded font-bold"
          >
            Start a new game
          </Link>
        </div>
      </main>
    );
  }
  return (
    <DataContextProvider>
      <main className="relative w-screen h-screen flex flex-col justify-around">
        <GameGrid />
        <Player />
      </main>
    </DataContextProvider>
  );
};

export default App;
