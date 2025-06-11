
import Personas from "../people.json"
import {Link, Outlet} from "react-router-dom"

//import './Card.css'

const Card = (id) => {
    const persona = Personas.filter((persona) => persona.id === id); 

  return (
    <>

    <p>Nombre: {persona.nombre} </p>
    <p>Edad: {persona.edad}  </p>
     <Link to={"/persona/"+persona.id}><Button  texto="Ver más ➕"/> </Link> 

    </>
  )
}

export default Card



