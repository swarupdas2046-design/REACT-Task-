import React from 'react'
import {useParams  } from "react-router-dom";
const Demand = () => {
   let val =  useParams()
    return (
    <div className='h-full w-full bg-black text-white flex items-center justify-center '>
      <h1 className='text-7xl'> {val.id} !!  yes our branch has there    </h1>
    </div>
  )
}

export default Demand
