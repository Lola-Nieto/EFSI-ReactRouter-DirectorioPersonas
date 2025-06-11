
import personas from "../people.json"
import {Link, Outlet} from "react-router-dom"
import Button from './Button.jsx'

import './Card.css'

const Card = (props) => {
    const persona = personas.find((persona) => persona.id == props.id); 

  return (
    <>
     {!persona &&
        <div className="cardHome">
          <p>Nombre: {persona.nombre} </p>
          <p>Edad: {persona.edad}  </p>
          <Link to={"/persona/"+persona.id}><Button  texto="Ver más ➕"/> </Link> 
        </div>
   
    }
    </>
  )
}

export default Card



