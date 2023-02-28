import React from 'react'
import { useState } from 'react'

export const LoginPG = () => {
  const [name, setName] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      console.log('Please enter a name');
    } 
     else {
      console.log(`Submitting form with name ${name}`);
    }
    // console.log(name)
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    console.log(value)
    setName(value);
    if (value.length < 3) {
      setInputError('Name must be at least 3 characters long');
    } else {
      setInputError('');
    }
  }

  return (
    // <form onSubmit={handleSubmit}> 
    //   <label>
    //     Name:
    //     <input type="text" value={name} onChange={handleNameChange} />
    //     {inputError && <span style={{ color: 'red' }}>{inputError}</span>}
    //   </label>
    //   <button type='submit'>submit</button>
    // </form>
    <div className="w-full max-w-xs">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input onChange={handleNameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input onChange={handleNameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      {/* { 
      inputError && <span style={{ color: 'red' }}>{inputError}</span> 
      } */}
      {
        inputError ? 'please enter a strong pass' : 'bye'
      }
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
  )
}
