import React from 'react'

const ProductCard = ({cards}) => {
  return (
    <>
      <div className='flex gap-10 justify-around' >
        {cards.map((e,i)=>(
          <div key={(i)} className='bg-gray-400 text-2xl text-white border-15 p-20 w-100 h-100 items-center text-center flex flex-col justify-center'>
         <h1>{e.product}</h1>
          <h1>{e.price}</h1></div>
          
        ))
           
        }
      </div>
    </>
  )
}

export default ProductCard
