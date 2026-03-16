import React from 'react'

const Presentation = ({users}) => {
  return (
    <>
    {users.map((e,i)=>(
<h1 className='text-lg' key={(i)}>{e.id} - {e.name} - {e.age}

</h1>
    ))}
    </>
  )
}

export default Presentation
