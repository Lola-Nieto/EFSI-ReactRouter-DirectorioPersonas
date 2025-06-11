import {useParams} from "react-router-dom"
import personas from "../people.json"

const DetallePersona = () => {
    const {id} = useParams();

    const personaBuscada = personas.find((persona) => persona.id == id); 

    const esMayorDeEdad = () => {
        return persona.edad >= 18 ? "Mayor de edad" : "Menor de edad";

    }
    return (
        <>
        {personaBuscada &&
            <div className="detallePersona">
                
            <p>Nombre completo: {personaBuscada.nombre} {personaBuscada.apellido} </p>
            <p>Email: {personaBuscada.email}  </p>
            <p>Edad: {personaBuscada.edad}  </p>
            <p> {esMayorDeEdad()}  </p>
            </div>
        
        }{
            <p> El ID no existe </p>
        }
        

        </>

    );
};

export default DetallePersona;