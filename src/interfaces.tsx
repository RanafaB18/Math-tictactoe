import { Dispatch, SetStateAction } from "react";

export interface DataContextType {
  userIsSelectingACard: boolean;
  gridData: Array<IGridCard>;
  currentGridItem: IGridCard;
  playerCardData: IPlayerCard[];
  setPlayerCardData: Dispatch<SetStateAction<IPlayerCard[]>>;
  setCurrentGridItem: Dispatch<SetStateAction<IGridCard>>;
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
