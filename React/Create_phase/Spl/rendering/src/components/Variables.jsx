import React from 'react'

const Variables = () => {

    const name = "Aswitha";
    const age = 20;
    const city = "chennai"
  return (
    <>
    <div>
        <h1 className='font-bold'>Variables</h1><br />
        <p>Name: {name} </p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
    </div>
    </>
  )
}

export default Variables
