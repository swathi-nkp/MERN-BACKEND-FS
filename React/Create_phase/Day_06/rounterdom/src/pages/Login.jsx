import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
  const  navigate = useNavigate();

  const handleclick = () =>{
    navigate ("/dashboard")
  }
        
    
  return (
    <>
      <div>
        <h1>Pls login</h1>
        <button onClick={handleclick} className='bg-gray-400 text-black p-3' >login</button>
      </div>
    </>
  )
}

export default Login
