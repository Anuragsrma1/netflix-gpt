import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
   
  const [isSignInForm,setIsSignInForm] = useState(true);
   const toggleSignInForm = () =>{
         setIsSignInForm(!isSignInForm);
   };

  return (
      <div>
        <Header/>
        <div className='absolute w-full'>
          <img className="w-full"
          src='https://www.pcworld.com/wp-content/uploads/2024/06/Netflix-Hintergrund.jpg?resize=1024%2C576&quality=50&strip=all'
           alt='background' />
       </div>  
       <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-black bg-opacity-80'>
          <h1 className='font-bold text-3xl text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
         {  !isSignInForm && < input type='text' 
           placeholder='Full Name' 
           className='p-4 my-4 w-full bg-gray-700 rounded-lg' 
            />}
          <input type='text' 
           placeholder='Email Id' 
           className='p-4 my-4 w-full bg-gray-700 rounded-lg'  />
          <input
           type='password' 
           placeholder='password'
           className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
          <button className='p-4 my-6 bg-red-600 rounded-md w-full'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 text-white cursor-pointer"  onClick={toggleSignInForm}>
          { isSignInForm 
          ? "New to Netflix? Sign up now." 
          : "Already Registered? Sign In now"}
            </p>
       </form>  
      </div>
  )
}

export default Login;
