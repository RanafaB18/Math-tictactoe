import { useEffect, useState } from "react";
import useDataContext from "../hooks/useDataContext";
import GridItem from "./GridItem";
import { socket } from "../socket";
import useRouteContext from "../hooks/useRouteContext";
import { useNavigate } from "react-router-dom";

const GameGrid = () => {
  const data = useDataContext();
  const navigate = useNavigate()
  const routerData = useRouteContext()
  const [disable, setDisable] = useState(false);
  function disableHandler() {
    setDisable(true);
  }
  function enableHandler() {
    setDisable(false);
  }
  function winnerByForfeitHandler() {
    navigate('/', { replace: true })
    routerData?.setWinner(true);
    setTimeout(() => {
      routerData?.setWinner(false);
    }, 2000);
  }
  useEffect(() => {
    socket.on("disable", disableHandler);
    socket.on("enable", enableHandler);
    socket.on("winner", winnerByForfeitHandler);

    return () => {
      socket.off("disable", disableHandler);
      socket.off("enable", enableHandler);
      socket.off("winner", winnerByForfeitHandler);
    };
  }, []);
  return (
    <>
      <section
        className={`${(data?.userIsSelectingACard) && "blur-sm"} ${
          disable && "pointer-events-none"
        } relative w-full max-w-5xl mx-auto h-2/3 grid grid-cols-3 grid-rows-3 border divide-x-2 divide-y-2`}
      >
        {data?.gridData.map((gridItem) => {
          return <GridItem key={gridItem.id} gridItem={gridItem} />;
        })}
      </section>
      {disable && !routerData?.winner && (
        <div className="absolute top-0 left-3 px-3 py-1 text-white bg-red-400">
          Opponent's Turn
        </div>
      )}

    </>
  );
};

export default GameGrid;
