import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#323232] flex justify-around px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='logo border-2'>
            <span className='self-center p-4 mt-4 md:space-x-8 md:mt-0 text-xl font-semibold whitespace-nowrap'>KustBooklet</span>
        </div>
        <div className="menu flex border-2">
            <ul className='flex flex-col p-4 text-[#f5f5f5] mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
                <li>Home</li>
                <li>Handouts</li>
                <li>Past Questions</li>
                <li>Contact</li>
            </ul>
            <button class="bg-[#0f9d58] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className='text-[#f5f5f5]'>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default Header