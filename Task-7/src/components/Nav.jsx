import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className='w-full bg-cyan-800 flex items-center justify-between py-6 px-10 fixed '>
        <h1 className='text-4xl text-white font-medium'> Bengal Foootwears </h1>
        <div className='flex items-center gap-7'>
            <Link className='text-2xl text-white' to='/'>Home</Link>
            <Link className='text-2xl text-white' to='/about'>About</Link>
            <Link className='text-2xl text-white' to='/product'>Products</Link>
            <Link className='text-2xl text-white' to='/branch'>Branches</Link>

        </div>
    </div>
  )
}

export default Nav
