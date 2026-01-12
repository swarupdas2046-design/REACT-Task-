import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate =  useNavigate()
  return (
    <div className=' relative text-white h-full w-full flex items-center justify-center flex-col gap-5 '>
        <h1 className=' text-3xl font-semibold lg: absolute top-4 text-red-600 whitespace-nowrap lg:text-7xl'>Welcome to Das Enterprises</h1>
       <h2 className='text-3xl font-light lg:font-medium whitespace-nowrap lg:text-5xl '>This is Home Page </h2>
       <button onClick={()=>{
            navigate('/product')
       }} className='px-15 py-3.5 rounded-3xl bg-cyan-700 active:scale-95 cursor-pointer '>Go to Products</button>
    </div>
  )
}

export default Home
