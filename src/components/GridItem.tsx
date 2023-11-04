import useDataContext from "../hooks/useDataContext";
import { IGridCard } from "../interfaces";

const GridItem = ({ gridItem }: { gridItem: IGridCard }) => {
  const data = useDataContext();

  const gridItemSelectedHandler = () => {
    blurBg();
    setGridItem();
  };

  const blurBg = () => {
    data?.setUserIsSelectingACard(true);
  };

  const setGridItem = () => {
    data?.setCurrentGridItem(gridItem);
  };


  return (
    <button
      onClick={gridItemSelectedHandler}
      className="flex justify-center items-center"
    >
      <span className="text-5xl">{gridItem.number}</span>
    </button>
  );
};

export default GridItem;
