import React from 'react'

export const Button = ({primaryGreen}) => {
  return (
    <button style={{backgroundColor: primaryGreen}}  className={`text-gray-800 font-bold font-popins ml-5 py-1 px-4 rounded inline-flex items-center`}>
        <span className={`text-[#f5f5f5]`}>More Info</span>
    </button>
  )
}
