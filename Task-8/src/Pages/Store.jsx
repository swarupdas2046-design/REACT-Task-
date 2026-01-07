import React from 'react'
import { Outlet } from 'react-router-dom'

const Store = () => {
  return (
     <div className='bg-red-900 w-fit p-10 absolute bottom-100 left-120  rounded-2xl'>
      <h1 className='text-6xl text-white capitalize'>This is Store-Page</h1>
      <Outlet/>
    </div>
  )
}

export default Store
