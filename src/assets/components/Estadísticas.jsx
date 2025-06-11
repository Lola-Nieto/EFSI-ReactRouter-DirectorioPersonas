import personas from "../people.json"


//import './Estadísticas.css'

function Estadísticas() {

    const calcularMayoresDeCiertaEdad = (edad) => {
        let contador = 0;
        {personas.map(persona => (
            persona.edad > edad && contador++ 
        ))}
        return contador;
    }
    const calcularPromedioDeEdad = () => {
        {personas.map(persona => (
            sumaEdades+= persona.edad
        ))}
        return (sumaEdades/personas.length);
    }
  return (
    <>
    <div className="estadisticas">
        <li>
            <ul><p> Cantidad total de personas: {personas.length} </p></ul>
            <ul><p> Cantidad de personas que tienen más de 35 años: {calcularMayoresDeCiertaEdad(35)} </p></ul>
            <ul><p> Personas mayores de edad: {calcularMayoresDeCiertaEdad(17)} </p></ul>
            <ul><p> Personas menores de edad: {personas.length - calcularMayoresDeCiertaEdad(17)} </p></ul>
            <ul><p> Promedio de edad: {calcularPromedioDeEdad()} </p></ul>


        </li>
    </div>
    </>
  )
}

export default Estadísticas
