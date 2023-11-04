import { createContext, ReactNode, useState } from "react";
import { DataContextType, IGridCard, IPlayerCard } from "../interfaces";

export const DataContext = createContext<DataContextType | null>(null);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [userIsSelectingACard, setUserIsSelectingACard] = useState(false);
  const [gridData, setGridData] = useState<Array<IGridCard>>([
    { id: 1, number: "" },
    { id: 2, number: "" },
    { id: 3, number: "" },
    { id: 4, number: "" },
    { id: 5, number: "" },
    { id: 6, number: "" },
    { id: 7, number: "" },
    { id: 8, number: "" },
    { id: 9, number: "" },
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
    number: "",
  });

  return (
    <DataContext.Provider
      value={{
        userIsSelectingACard,
        gridData,
        currentGridItem,
        playerCardData,
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
