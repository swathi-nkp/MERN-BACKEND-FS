import React from 'react'

const ArrayOfObject = () => {
  const user = [{id:1,name:"Vishwa",age:"25"}]
  return (
    <>
    <div>
        <h1 className='font-bold'>Array of object</h1><br />
        <p>Name:{user[0].name}</p>
        <p>Age:{user[0].age}</p>
    </div>
    </>
  )
}

export default ArrayOfObject
