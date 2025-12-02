import { Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import Historia from "./Historia"
import Trajes from "./Trajes"
import Entradas from "./Entradas"

//import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/historia" element={<Historia></Historia>}></Route>
        <Route path="/trajes" element={<Trajes></Trajes>}></Route>
        <Route path="/entradas" element={<Entradas></Entradas>}></Route>
      </Routes>      
    </>
  )
}

export default App
