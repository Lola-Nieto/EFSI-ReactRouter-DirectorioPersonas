import {useParams} from "react-router-dom"
import {Personas} from "EFSI-ReactRouter-DirectorioPersonas/src/assets/people.json"

const Persona = () => {
    const {id} = useParams();

    const persona = Personas.filter((persona) => persona.id === id); 

    const esMayorDeEdad = () => {
        if(persona.edad >= 18){
            return("Mayor de edad");
        }else{
            return("Menor de edad");
        }
    }
    return (
        <>
        {!persona &&
            <div className="detallePersona">
            <p>Nombre completo: {persona.nombre} {persona.apellido} </p>
            <p>Email: {persona.email}  </p>
            <p>Edad: {persona.edad}  </p>
            <p> {esMayorDeEdad()}  </p>
            </div>
        
        }{
            <p> El ID no existe </p>
        }
        

        </>
    );
};

export default Persona;