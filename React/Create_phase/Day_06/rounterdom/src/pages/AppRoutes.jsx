import React from 'react'
import DashBoardLayout from './DashBoardLayout'
import Login from './login'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <>
    <div>
        <Routes>
            <Route path ="/" element={<DashBoardLayout/>}/>
        </Routes>

<Login/>
    </div>
      </>
  )
}

export default AppRoutes
