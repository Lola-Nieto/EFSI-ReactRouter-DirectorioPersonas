import personas from "../people.json"
import Card from "./Card";
import "./Card.css";


const Home = () => {
  return (
    <>
      <div className="cardContainer">
        {personas.map(persona => (
          <Card key={persona.id} id={persona.id} />
        ))}
      </div>
    </>
  )
}

export default Home
