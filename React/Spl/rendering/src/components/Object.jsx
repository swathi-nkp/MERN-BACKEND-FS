import React from 'react'

const Object = () => {
 const user = {name:"Nithiya",email:"nithiya@gmail.com",phn:9087654321}
 return(
    <>
    <div>
        <h1 className='font-bold'>Object Rendering</h1><br />
        <h1>Name: {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phn}</p>
    </div>
    </>
  )
}

export default Object
