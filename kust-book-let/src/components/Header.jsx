import React from 'react'
import { useState, useEffect } from 'react'
import {RxCross1} from 'react-icons/rx'
import {RiMenu3Line} from 'react-icons/ri'
import { Button } from './Button'
import { useRef } from 'react'

export const Header2 = () => {
  const [active, setActive] = useState(false)

  const handleNavbar = () => {
    setActive(!active)
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className='bg-[#484848] fixed px-2 sm:px-4 py-2.5 z-20 top-0 left-0 border-b shadow-md border-gray-500 w-full text-white flex '>
      <div className='container flex flex-wrap items-center justify-around mx-auto'>

        <a href="" className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'> KUST<span className='text-[#0f9d58]'>Booklet</span></span>
        </a>

        <div className=' items-center justify-between'>

          <div className=' absolute right-8 top-[18px] items-center text-center mb-4 flex sm:hidden cursor-pointer scale-150 '>
            <RiMenu3Line onClick={ handleNavbar } style={{ color: 'white', textAlign: 'center'}}/>
          </div>

          <ul className='hidden sm:flex gap-8 p-4 w-full uppercase md:text-sm md:font-bold font-popins rounded-lg text-[#f5f5f5]'>
            <li className='hover:underline underline-offset-4'><a href=''>Home</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Handouts</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Past Questions</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Contact</a></li>
            <Button primaryGreen='#0f9d58' ml='5px'/>
          </ul>

          <div ref={menuRef} className={active ? 'cursor-pointer try flex flex-col items-start p-3 fixed inset-0 left-[35%] uppercase h-full bg-black/50 backdrop-blur-sm gap-5 transition delay-700 duration-300 ease-in-out sm:hidden' : 'hidden'}>
            <ul className='flex flex-col'>
              <RxCross1 onClick={handleNavbar} className='close mt-7  right-0 text-white font-medium text-[25px] leading-5 not-italic'/>
              <li className='hover:underline underline-offset-8 text-white font-medium text-[16px] leading-5 not-italic'><a href=''>Home</a></li>
              <li className='hover:underline underline-offset-4 text-white font-medium text-[16px] leading-5 not-italic'><a href=''>Handouts</a></li>
              <li className='hover:underline underline-offset-4 text-white font-medium text-[16px] leading-5 not-italic'><a href=''>Past Questions</a></li>
              <li className='hover:underline underline-offset-4 text-white font-medium text-[16px] leading-5 not-italic'><a href=''>Contact</a></li>
            </ul>
          
            <div  className='flex justify-start'>
              <Button primaryGreen='#0f9d58'/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
