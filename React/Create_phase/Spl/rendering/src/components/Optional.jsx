import React from 'react'

const Optional = () => {
    const user = {address:{city:null}}
  return (
    <>
    <h1 className='font-bold'>Optional Chaining </h1>
    {user.address?.city}
    </>
  )
}

export default Optional
