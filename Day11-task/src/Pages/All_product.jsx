import React, { useContext } from 'react'
import { ItemContext,  } from '../Context/MainContext'
import { Link } from "react-router-dom";
const All_product = () => {
  let Product = useContext(ItemContext)
  return (
   

<div className='h-full w-full bg-black flex gap-4 justify-around flex-wrap overflow-auto p-7 '>

          {Product.map((elem,idx)=>{
            return  <Link key={idx} className='h-80 w-70 p-1 bg-gray-800 rounded-xl shrink-0' to={`/product/${elem.id}`}>
                <div className='flex flex-col gap-8'>
                  <img className='w-full h-60 object-cover object-center' src={elem.image} alt="" />
                  <h1 className='text-2xl text-red-700 text-center bg-amber-50 mb-10'> {elem.category} </h1>
                </div>
              </Link>
          })}

    </div>
  )
}

export default All_product
