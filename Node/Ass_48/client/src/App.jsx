import {Routes,Route} from "react-router-dom" 
import Resgister from "./pages/Resgister"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"


const App = () => {
  return (
    <>
      <Routes>
      <Route path = "/" element = {<Resgister/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
