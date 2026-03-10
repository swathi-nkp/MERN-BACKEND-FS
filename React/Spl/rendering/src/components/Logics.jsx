import React from 'react'

const Logics = () => {
    const isAdmin = true
  return (
    <>
     <h1 className='font-bold'>Logical AND Rendering</h1><br />
     <p>{isAdmin &&"Admin Dashboard"}</p>
    </>
  )
}

export default Logics
