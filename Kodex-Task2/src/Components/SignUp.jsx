import React from 'react'

const SignUp = (props) => {
  // console.log(props.settoggel());
  
  return (
    <div className='w-100 lg:w-[30%] bg-[#FDFEFE] shadow-[0_0_20px_rgba(128,128,128,0.202)] py-4 rounded-2xl'>


      <div className='h-full w-full p-4'>
        <div className='text-center'>
        <h1 className='mb-3 text-4xl font-bold'>Create account</h1>
        <p>Join us today</p>
      </div>

        
        <form className='space-y-5 p-2.5'> 
          <div className='flex flex-col gap-1'>
          <label htmlFor="Name" className='font-semibold ml-2.5'>Full Name</label>
          <input className='w-full p-5 bg-white border border-gray-300 outline-0 rounded-2xl font-bold' type="text" placeholder='Swarup Das' required />
          </div>
            <div className='flex flex-col gap-1'>
          <label htmlFor="Name" className='font-semibold ml-2.5'>email</label>
          <input className='w-full p-5 bg-white border border-gray-300 outline-0 rounded-2xl font-bold' type="email" placeholder='das@gmail.com' required/>
          </div>
            <div className='flex flex-col gap-1'>
          <label htmlFor="Name" className='font-semibold ml-2.5'>Password</label>
          <input className='w-full p-5 bg-white border border-gray-300 outline-0 rounded-2xl font-bold' type="password" placeholder='........' required/>
          </div>
          <button className='w-full py-3 mt-4 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md'>Sign up</button>
        </form>
      <p className='mt-6 text-center text-md text-slate-600 mb-6'>
        Already have an account? 
        <button className='font-semibold text-slate-900 hover:text-slate-700 transition-colors duration-200 cursor-pointer'  onClick={() => props.settoggel(prev => !prev)}>Sign in</button>
      </p>

      </div>

   
     
    </div>
  )
}

export default SignUp
