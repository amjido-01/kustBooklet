import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Button } from './Button'

export const MenuItems = ({handleNavbar, active}) => {
  return (
    <div className={active ? 'flex flex-col items-start p-3 fixed inset-0 left-[55%] uppercase h-[15rem] bg-[#F5F5F5] gap-1 ease-in-out duration-500 border-2 sm:hidden' : 'hidden'}>
      <ul className=''>
        <RxCross1 onClick={handleNavbar} className='close mt-7  right-0 text-[#000000] font-medium text-[14px] leading-5 not-italic'/>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Home</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Handouts</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Past Questions</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Contact</a></li>
      </ul>
      
      <div  className='flex justify-start'>
        <Button primaryGreen='#0f9d58'/>
      </div>
   </div>
  )
}
