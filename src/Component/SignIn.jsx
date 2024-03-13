import React from 'react'

function SignIn(){
  return (
    <>
      <div className='text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto mt-[100px]'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
          <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
            <h1 className='title-font font-medium text-3xl text-gray-900'>
              Get Started with your account
            </h1>
            <p className='leading-relaxed mt-4'>
              Find your favourite food on our platform. Just one step to order your food 
            </p>
          </div>
          <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
            <h2 className=' text-gray-900 text-lg font-medium title-font mb-5'>
              Sign Up 
            </h2>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600' for="full-name">
                Full name
              </label>
              <input type="text" id="full-name" name='full-name' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
            </div>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600' for="email">
                Email
              </label>
              <input type="text" id="email" name='email' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
            </div>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600' for="mobile">
                Mobile
              </label>
              <input type="text" id="mobile" name='mobile' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
            </div>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600' for="password">
                Password
              </label>
              <input type="text" id="password" name='password' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
            </div>
            <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )};

export default SignIn;