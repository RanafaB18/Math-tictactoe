import useDataContext from "../hooks/useDataContext";
import { IPlayerCard } from "../interfaces";

const Card = ({ card }: { card: IPlayerCard }) => {
  const data = useDataContext();

  const playerCardSelectedHandler = () => {
    setCurrentCard()
    unblurBg();
    setGridToCard();
  };
  const setCurrentCard = () => {
    data?.setCurrentCard(card)
  }
  const unblurBg = () => {
    data?.setUserIsSelectingACard(false);
  };
  const setGridToCard = () => {
    data?.setGridData((prevData) => {
      return prevData.map((gridItem) => {
        if (
          gridItem.id === data.currentGridItem.id &&
          gridItem.number === ""
          ) {
          removeCardFromPlayer()
          return { ...gridItem, number: card.number.toString() };
        }
        return gridItem;
      });
    });
  };
  const removeCardFromPlayer = () => {
    data?.setPlayerCardData(prevState => prevState.filter(playerCard => playerCard.id !== card.id))
  };
  return (
    <button
      onClick={playerCardSelectedHandler}
      className="w-44 h-44 shadow-lg rounded-lg bg-white"
    >
      <span className="text-3xl">{card.number}</span>
    </button>
  );
};

export default Card;
