import {Link, Outlet} from "react-router-dom"

//import './Home.css'

const Layout = () => {

  return (
    <>
        <nav>
          <Link to="/"> Inicio </Link>
          <Link to="/estadisticas"> Estadísticas</Link>
          <Link to="/contacto"> Contacto</Link>

        </nav>
        <Outlet/>
    </>
  )
}

export default Layout;
