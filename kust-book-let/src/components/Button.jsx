import React from 'react'
import { Navigate } from 'react-router-dom'

export const Button = ({primaryGreen, ml, next, typeValue}) => {
  return (
    <button style={{backgroundColor: primaryGreen, marginLeft: ml}} onClick={next} className={`text-gray-800 font-bold font-popins py-1 px-4 rounded inline-flex items-center`}>
      <span className={`text-[#f5f5f5]`}>{typeValue}</span>
    </button>
  )
}
