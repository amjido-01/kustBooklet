import React from 'react'

export const Card = (props) => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-56" src={props.pic} alt="avatar" />

        <div className="py-5 text-center">
            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{props.name}</a>
            <span className="text-sm text-gray-700 dark:text-gray-200">Designer</span>
        </div>
    </div>
  )
}
