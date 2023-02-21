import React from 'react'
import {HiOutlineX} from 'react-icons/hi'

export const MenuItems = ({handleNavbar, active}) => {
  return (
    <ul className={active ? 'flex flex-col items-start p-3 fixed inset-0 left-1/4 uppercase h-[15rem] bg-[#F5F5F5] gap-1 ease-in-out duration-500 border-2 md:hidden' : 'hidden'}>
      <HiOutlineX onClick={handleNavbar} className=' mt-7 ml-48 right-0 text-[#000000] font-medium text-[14px] leading-5 not-italic'/>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Home</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Handouts</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Past Questions</a></li>
        <li className='text-[#000000] font-medium text-[14px] leading-5 not-italic'><a href=''>Contact</a></li>
    </ul>
  )
}
