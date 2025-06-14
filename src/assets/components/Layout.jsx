import {Link, Outlet} from "react-router-dom"

import './Layout.css'

const Layout = () => {

  return (
    <>
        <nav className="navbar">
          <Link to="/"> Inicio </Link>
          <Link to="/estadisticas"> Estadísticas</Link>
          <Link to="/contacto"> Contacto</Link>

        </nav>
          <Outlet /> 
    </>
  )
}

export default Layout;
