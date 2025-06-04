import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "src/assets/components/Home.jsx";
import Contacto from "src/assets/components/Contacto.jsx";
import Estadísticas from "src/assets/components/Estadísticas.jsx";
import DetallePersona from "src/assets/components/DetallePersona.jsx";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/persona/:id" element={<DetallePersona />}></Route>
          <Route path="/estadisticas" element={<Estadísticas />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
