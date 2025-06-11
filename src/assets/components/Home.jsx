import Personas from "../people.json"
import Card from "./Card";


//import './Home.css'

const Home = () => {
  return (
    <>
      {Personas.map(persona => (
        <Card key={persona.id} id={persona.id} />
      ))}
    </>
  )
}

export default Home
