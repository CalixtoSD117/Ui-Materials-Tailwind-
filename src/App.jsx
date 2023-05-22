import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Componentes from "./pages/Componentes"
import Freamworks from "./pages/Freamworks"
import Recursos from "./pages/Recursos"



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/componentes" Component={Componentes}/>
        <Route path="/freamworks" Component={Freamworks}/>
        <Route path="/recursos" Component={Recursos}/>
      </Routes>
      
    </div>
  )
}

export default App