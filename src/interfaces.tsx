import { Dispatch, SetStateAction } from "react";

export interface DataContextType {
  userIsSelectingACard: boolean;
  gridData: Array<IGridCard>;
  currentCard: IPlayerCard;
  currentGridItem: IGridCard;
  playerCardData: IPlayerCard[];
  setPlayerCardData: Dispatch<SetStateAction<IPlayerCard[]>>;
  setCurrentGridItem: Dispatch<SetStateAction<IGridCard>>;
  setCurrentCard: Dispatch<SetStateAction<IPlayerCard>>;
  setGridData: Dispatch<SetStateAction<IGridCard[]>>;
  setUserIsSelectingACard: Dispatch<boolean>;
}

export interface IGridCard {
  number: string;
  id: number;
}

export interface IPlayerCard {
    number: number;
    id: number;
}
