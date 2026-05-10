import {Routes,Route} from "react-router-dom" 
import Resgister from "./pages/Resgister"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./routes/ProtectedRoute"


const App = () => {
  return (
    <>
      <Routes>
      <Route path = "/" element = {<Resgister/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/dashboard" element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}

export default App
