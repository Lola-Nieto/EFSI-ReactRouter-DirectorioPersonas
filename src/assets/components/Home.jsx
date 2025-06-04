import {Link} from "react-router-dom"

import './Home.css'

function Home = () => {

  return (
    <>
        <nav>
          <Link to="/estadisticas"> Estadísticas</Link>
          <Route path="/persona/:id" element={<DetallePersona />}></Route>
          <Route path="/estadisticas" element={<Estadísticas />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>

        </nav>
    </>
  )
}

export default App
