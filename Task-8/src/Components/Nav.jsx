import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className='w-full h-20 px-8 py-4 bg-pink-400 flex items-center justify-between '>
            <h1 className='text-4xl text-white font-semibold'>Das Group</h1>
            <div className='flex gap-5'>   
                <NavLink className={(elem)=>elem.isActive?'text-2xl font-semibold text-blue-700 underline':'text-2xl text-white font-semibold'
                }  to='/'>Home</NavLink>
                <NavLink className={({isActive})=>isActive?'text-2xl font-semibold text-blue-700 underline':'text-2xl text-white '} to='/about'>About</NavLink>
                <NavLink className={({isActive})=>isActive?'text-2xl font-semibold text-blue-700 underline':'text-2xl text-white '} to='/contact'>Contact</NavLink>
                <NavLink className={({isActive})=>isActive?'text-2xl font-semibold text-blue-700 underline':'text-2xl text-white '} to='/store'>Store</NavLink>
            </div>
    </div>
  )
}

export default Nav
