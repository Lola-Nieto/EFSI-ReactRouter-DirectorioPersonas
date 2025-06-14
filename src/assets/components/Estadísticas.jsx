import personas from "../people.json"



function Estadísticas() {

    const calcularMayoresDeCiertaEdad = (edad) => {
        let contador = 0;
        {personas.map(persona => (
            persona.edad > edad && contador++ 
        ))}
        return contador;
    }
    const calcularPromedioDeEdad = () => {
        let sumaEdades = 0;
        {personas.map(persona => (
            sumaEdades+= persona.edad
        ))}
        return (sumaEdades/personas.length);
    }
  return (
    <>
    <div className="estadisticas">
        <h1>Estadísticas</h1>
        <li>
            <ul><p> Cantidad total de personas:<span className="datoDestacado">{personas.length}</span></p></ul>
            <ul><p> Cantidad de personas que tienen más de 35 años: <span className="datoDestacado">{calcularMayoresDeCiertaEdad(35)}</span> </p></ul>
            <ul><p> Personas mayores de edad: <span className="datoDestacado">{calcularMayoresDeCiertaEdad(17)}</span> </p></ul>
            <ul><p> Personas menores de edad: <span className="datoDestacado">{personas.length - calcularMayoresDeCiertaEdad(17)}</span> </p></ul>
            <ul><p> Promedio de edad: <span className="datoDestacado">{calcularPromedioDeEdad()}</span> </p></ul>


        </li>
    </div>
    </>
  )
}

export default Estadísticas
