import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [showReloadWarning, setShowReloadWarning] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("is-reloaded")) {
      console.log("Reloaded");
      console.log("You forfeited");
      setShowReloadWarning(true);
      sessionStorage.removeItem("is-reloaded");
    }
  }, []);

  function closeWarning() {
    setShowReloadWarning(false)
  }
  const id = uuid();
  return (
    <main className="relative h-screen w-screen">
      <Link to={`/tictactoe/${id}`}>TicTacToe</Link>
      {showReloadWarning && (
        <section className="absolute inset-0 -top-32 m-auto w-fit h-fit bg-white z-20">
          <div className="flex flex-col gap-4 border rounded-md p-6 shadow-md">
            <h1 className="text-2xl">Reloading during a match is a forfeit</h1>
            <button onClick={closeWarning} className="self-end bg-red-500 text-white py-0.5 px-3 rounded font-bold">
              Okay
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
