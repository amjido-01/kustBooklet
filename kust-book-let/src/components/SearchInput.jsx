import React from 'react'
import {FaSistrix} from 'react-icons/fa'

export const SearchInput = () => {
  return (
    <div>
        <form action="">
            <div className="relative">
                <input type="text" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:text-gray-300  focus:outline-none " placeholder="Search" />
                <span className="absolute inset-y-0 right-4 flex items-center pl-3">
                    <FaSistrix className="w-5 h-5 text-gray-400"/>
                </span>
            </div>
        </form>
    </div>
 )
}
