import Personas from "../people.json"


//import './Estadísticas.css'

function Estadísticas() {

    const calcularMayoresDeCiertaEdad = (edad) => {
        let contador = 0;
        Personas.foreach(persona => 
            persona.edad > edad && contador++ 
        )
        return contador;
    }
    const calcularPromedioDeEdad = () => {
        let sumaEdades = 0;
        Personas.foreach(persona => 
            sumaEdades+= persona.edad  
        )
        return (sumaEdades/Personas.length);
    }
  return (
    <>
    <div className="estadisticas">
        <li>
            <ul><p> Cantidad total de personas: {Personas.length} </p></ul>
            <ul><p> Cantidad de personas que tienen más de 35 años: {calcularMayoresDeCiertaEdad(edad = 35)} </p></ul>
            <ul><p> Personas mayores de edad: {calcularMayoresDeCiertaEdad(edad = 17)} </p></ul>
            <ul><p> Personas menores de edad: {Personas.length - calcularMayoresDeCiertaEdad(edad = 17)} </p></ul>
            <ul><p> Promedio de edad: {calcularPromedioDeEdad()} </p></ul>


        </li>
    </div>
    </>
  )
}

export default Estadísticas
