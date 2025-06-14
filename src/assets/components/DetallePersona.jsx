import {useParams} from "react-router-dom"
import personas from "../people.json"

import './DetallePersona.css'

const DetallePersona = () => {
    const {id} = useParams();

    const personaBuscada = personas.find((persona) => persona.id == id); 
    if(!personaBuscada){
        return   ( <h1>Detalle de Persona -  El ID no existe </h1>)      
    }

    const esMayorDeEdad = () => {
        return personaBuscada.edad >= 18 ? "Mayor de edad" : "Menor de edad";

    }
    return (
        <>
        {personaBuscada &&
            <div className="todo">
                      
                <h1>Detalle de {personaBuscada.nombre}</h1> 

                <div className="detallePersona">
                    <p>Nombre completo: <span className="datoDestacado">{personaBuscada.nombre} {personaBuscada.apellido}</span> </p>
                    <p>Email: <span className="datoDestacado">{personaBuscada.email}</span>  </p>
                    <p>Edad: <span className="datoDestacado">{personaBuscada.edad}</span>  </p>
                    <p className="datoDestacado">{esMayorDeEdad()}  </p>
                </div>
            </div>
        
        }
        

        </>

    );
};

export default DetallePersona;