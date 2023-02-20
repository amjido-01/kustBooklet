import React from 'react'

export const Button = ({color}) => {
  return (
    <button  className={`bg-${color} text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}>
        <span className={`text-${color}`}>More Info</span>
    </button>
  )
}
