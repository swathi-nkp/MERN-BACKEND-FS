import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Kids from './pages/Kids'
import Women from './pages/Women'
import Men from './pages/Men'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path = "/" element={<Men/>} />
      <Route path = "/women" element={<Women/>} />
      <Route path = "/kids" element={<Kids/>} />
    </Routes>
    </>
  )
}

export default App
