import React from 'react'
import { Link } from 'react-router-dom'
const DashBoardLayout = () => {
  return (
    <>
      <div>
        <Link to = "/">home</Link>
        <Link to = "/profile">profile</Link>
        
      </div>
    </>
  )
}

export default DashBoardLayout
