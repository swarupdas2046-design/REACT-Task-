import React, { useState } from 'react'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'

const App = () => {
  const [toggel, settoggel] = useState(true)
  return (
    <div className='h-full w-full bg-[#F4F7FA] flex items-center justify-center'>
    
        {toggel ? <SignUp settoggel={settoggel}/> : <SignIn settoggel={settoggel}/>}
      
    </div>
  )
}

export default App
