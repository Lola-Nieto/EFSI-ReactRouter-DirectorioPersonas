import {useParams} from "react-router-dom"
import personas from "../people.json"

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
            <div className="detallePersona">
                      
                <h1>Detalle de {personaBuscada.nombre}</h1> 
                <p>Nombre completo: {personaBuscada.nombre} {personaBuscada.apellido} </p>
                <p>Email: {personaBuscada.email}  </p>
                <p>Edad: {personaBuscada.edad}  </p>
                <p> {esMayorDeEdad()}  </p>
            </div>
        
        }
        

        </>

    );
};

export default DetallePersona;