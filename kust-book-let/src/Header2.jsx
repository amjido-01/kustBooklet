import React from 'react'
import { useState } from 'react'
import { MenuItems } from './components/MenuItems'
import {RiMenu3Line} from 'react-icons/ri'
import { Button } from './components/Button'

export const Header2 = () => {
  const [active, setActive] = useState(false)

  const handleNavbar = () => {
    setActive(!active)
  }

  return (
    <div className='bg-[#323232] fixed px-2 sm:px-4 py-2.5 z-20 top-0 left-0 border-2 w-full text-white flex '>
      <div className='container flex flex-wrap items-center justify-around mx-auto'>

        <a href="" className='flex items-center border-3 border-green-600'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'> KUST<span className='text-[#0f9d58]'>Booklet</span></span>
        </a>

        <div className=' items-center justify-between border-3 border-green-600'>

          <div className=' absolute right-8 top-[18px] items-center text-center mb-4 flex sm:hidden cursor-pointer scale-150 '>
            <RiMenu3Line onClick={ handleNavbar } style={{ color: 'white', textAlign: 'center'}} className='ico' />
          </div>

          <ul className='hidden sm:flex gap-8 p-4 w-full uppercase md:text-sm md:font-bold font-popins rounded-lg text-[#f5f5f5]'>
            <li className='hover:underline underline-offset-4'><a href=''>Home</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Handouts</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Past Questions</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Contact</a></li>
            <Button primaryGreen='#0f9d58' ml='5px'/>
          </ul>
          <MenuItems handleNavbar={handleNavbar} active={active}></MenuItems>
          
        </div>

      </div>
    </div>
  )
}
