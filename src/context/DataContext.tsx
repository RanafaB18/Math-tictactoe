import { createContext, ReactNode, useEffect, useState } from "react";
import { DataContextType, IGridCard, IPlayerCard } from "../interfaces";
import { socket } from "../socket"
import { useLocation } from "react-router-dom";

export const DataContext = createContext<DataContextType | null>(null);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [userIsSelectingACard, setUserIsSelectingACard] = useState(false);
  const [gridData, setGridData] = useState<Array<IGridCard>>([
    { id: 1, number: "-" },
    { id: 2, number: "-" },
    { id: 3, number: "-" },
    { id: 4, number: "-" },
    { id: 5, number: "-" },
    { id: 6, number: "-" },
    { id: 7, number: "-" },
    { id: 8, number: "-" },
    { id: 9, number: "-" },
  ]);
  const [playerCardData, setPlayerCardData] = useState<IPlayerCard[]>([
    { id: 1, number: 1 },
    { id: 2, number: 3 },
    { id: 3, number: 5 },
    { id: 4, number: 7 },
    { id: 5, number: 9 },
  ]);
  const [currentGridItem, setCurrentGridItem] = useState<IGridCard>({
    id: 0,
    number: "-",
  });
  const [playerId, setPlayerId] = useState("")

  const room = useLocation().pathname

  function onConnect() {
    socket.emit('join-room', ({ room }))
  }

  function shareCards(cards: IPlayerCard[]) {
      setPlayerCardData(cards);
  }

  function updateGridData(newGrid: IGridCard[]) {
    setGridData(newGrid)
  }

  function updatePlayerId(id: string) {
    setPlayerId(id)
  }

  useEffect(() => {
    socket.connect()
    socket.on('connect', onConnect)
    socket.on('share-cards', shareCards)
    socket.on('update-all-players', updateGridData)
    socket.on('send-id', updatePlayerId)
    return () => {
      socket.off('connect', onConnect)
      socket.off('share-cards', shareCards)
      socket.off('update-all-players', updateGridData)
      socket.off('send-id', updatePlayerId)
      socket.disconnect();
    }
  }, [])
  return (
    <DataContext.Provider
      value={{
        userIsSelectingACard,
        gridData,
        currentGridItem,
        playerCardData,
        playerId,
        setPlayerCardData,
        setCurrentGridItem,
        setGridData,
        setUserIsSelectingACard,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
