import React from 'react'

const TerinaryOperator = () => {
  const age = 12;
  
    return(
        <>
        <h1 className='font-bold'>Terinary Operator</h1><br />
        <div>{age?"Adult":"Minor"}</div>
        </>
    )
};



export default TerinaryOperator;