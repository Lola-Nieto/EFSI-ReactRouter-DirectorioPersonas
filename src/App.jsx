import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./assets/components/Home.jsx";
import Contacto from "./assets/components/Contacto.jsx";
import Estadísticas from "./assets/components/Estadísticas.jsx";
import DetallePersona from "./assets/components/DetallePersona.jsx";
import NotFound from "./assets/components/NotFound.jsx";

import Layout from "./assets/components/Layout.jsx";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/persona/:id" element={<DetallePersona />}></Route>
            <Route path="/estadisticas" element={<Estadísticas />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<NotFound/>}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
