import React from 'react'

export const Card = (props) => {
  return (
    <div className='m-4'>
      <div className="w-full card overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-56" src={props.pic} alt="avatar" />

        <div className="py-5 text-center">
            <a href="#" className="block text-xl font-bold dark:text-white" role="link">{props.name}</a>
            <p className='text-sm text-gray-700 dark:text-gray-200 pt-4 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius.</p>
            <span className="text-lg font-bold text-gray-700 dark:text-gray-200 underline underline-offset-4 decoration-2 decoration-[#0F9D58]">{props.profession}</span>
        </div>
    </div>
    </div>
  )
}
