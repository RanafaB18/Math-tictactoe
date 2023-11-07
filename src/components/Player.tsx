import useDataContext from "../hooks/useDataContext"
import Card from "./Card"

const Player = () => {
  const data = useDataContext()
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] max-w-4xl m-2 md:mx-auto bg-gray-100 p-3 gap-2">
      {
        data?.playerCardData.map(card => (
          <Card key={card.id}  card={card}/>
        ))
      }
    </section>
  )
}

export default Player
