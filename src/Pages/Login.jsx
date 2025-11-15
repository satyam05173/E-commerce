import React from 'react'
import { useState } from 'react'

const Login = () => {
const [currentState, setCurrentState] = useState('Sign Up');

const  onSubmitHandler=(event)=>
  {
      event.preventDefault();
  }
  return (
   <form     onSubmit={onSubmitHandler}  className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
<div className='inline-flex items-center gap-2 mb-2 mt-10 '>
  <p className='prata-rugular text-3xl'>{currentState}</p>
<hr className='border-none h-[1.5px] w-8 bg-gray-800' />
</div>

 {currentState === 'Login' ? '' :    <input className='border border-gray-800 rounded py-2 px-3 w-full ' type="text" placeholder='Name' required />}         
<input className='border border-gray-800 rounded py-2 px-3 w-full ' type="email" placeholder='Email' required />
<input className='border border-gray-800 rounded py-2 px-3 w-full ' type="password" placeholder='Password' required />
 <div className='flex justify-between text-sm mt-[-8px] w-full ' >
<p className='cursor-pointer'>
Forgot your password?
</p>
{
   currentState === 'Login' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> :
    <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>   
}
 </div>
 <button type="submit" className='cursor-pointer bg-black text-white px-8 py-2 mt-4' >    {currentState === 'Login' ? 'Sign In' :  'Sign Up'   }  </button>
   </form>
  )
}

export default Login