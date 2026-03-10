import React from 'react'

const Conditional = () => {
    const isLoggedIn = false;
  return (
    <>
    <div>
        <h1 className='font-bold'>Conditional Rendering</h1><br/>
        {isLoggedIn ? "Welcome User":"Please Login"}
        
    </div>
    </>
  )
}

export default Conditional
