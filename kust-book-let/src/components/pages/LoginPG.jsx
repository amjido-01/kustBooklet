import React from 'react'
import { useState } from 'react'

export const LoginPG = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = (event) => {
    event.preventDefault()
  }

  return (
    <div onSubmit={handleForm} className='flex justify-center items-center mt-[45%] md:mt-48'>
      <div className="w-[448px] p-4 ">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
    </div>
    
  )
  
}
