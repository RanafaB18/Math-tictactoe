import useDataContext from "../hooks/useDataContext"
import GridItem from "./GridItem"

const GameGrid = () => {
  const data = useDataContext()
  return (
    <section className={`${data?.userIsSelectingACard && "blur-sm"} w-full max-w-5xl mx-auto h-2/3 grid grid-cols-3 grid-rows-3 border divide-x-2 divide-y-2`}>
    {
      data?.gridData.map((gridItem) => {
        return <GridItem key={gridItem.id} gridItem={gridItem} />
      })
    }
  </section>
  )
}

export default GameGrid
