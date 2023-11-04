import useDataContext from "../hooks/useDataContext"
import Card from "./Card"

const Player = () => {
  const data = useDataContext()
  return (
    <section className="max-w-4xl mx-auto bg-gray-100 p-3 flex gap-2">
      {
        data?.playerCardData.map(card => (
          <Card key={card.id}  card={card}/>
        ))
      }
    </section>
  )
}

export default Player
