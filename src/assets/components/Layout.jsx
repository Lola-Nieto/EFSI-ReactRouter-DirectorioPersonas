import {Link, Outlet} from "react-router-dom"

import './Home.css'

function Layout = () => {

  return (
    <>
        <nav>
          <Link to="/persona/:id"> Inicio </Link>
          <Link to="/estadisticas"> Estadísticas</Link>
          <Link to="/contacto"> Contacto</Link>

        </nav>
        <Outlet/>
    </>
  )
}

export default App
