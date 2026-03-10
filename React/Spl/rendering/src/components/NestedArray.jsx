import React from 'react'

const NestedArray = () => {
    const users = [{name:"John",skills:["html","css","java script"]}]
  return (
    <>
    <div>
        <p className='font-bold'>Neasted Array</p>
        <p> Name: {users[0].name}</p>
         {users[0].skills.map((e,i)=>(
             <p key = {i}>skills:{e}</p>
        ))}
    </div>
    </>
  )
}

export default NestedArray
