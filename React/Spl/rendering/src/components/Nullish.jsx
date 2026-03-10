import React from 'react'

const Nullish = () => {
    const userName = null
  return (<>
    <h1 className="font-bold">Nullish Rendering</h1><br />
    <h1>{userName ?? "Guest User"}</h1>
    </>
  )
}

export default Nullish
