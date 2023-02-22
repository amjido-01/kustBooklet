import React from 'react'
import { useState } from 'react'
import { MenuItems } from './components/MenuItems'
import {HiMenuAlt3} from 'react-icons/hi'
import {RiMenu3Line} from 'react-icons/ri'
import { Button } from './components/Button'

export const Header2 = () => {
  const [active, setActive] = useState(false)

  const handleNavbar = () => {
      setActive(!active)
  }

  return (
    <div className='bg-[#323232] fixed px-2 sm:px-4 py-2.5 z-20 top-0 left-0 border-2 w-full text-white items-center flex justify-around text-center'>
      <div className="logo text-center font-bold">
        <a href="">
         <span className=''> KUST<span className='text-[#0f9d58]'>Booklet</span></span>
        </a>
      </div>
    
     <div className='flex'>
     <nav>
          <div className=' absolute right-6 items-center text-center mb-4 flex sm:hidden cursor-pointer scale-150 '>
            <RiMenu3Line onClick={ handleNavbar } style={{ color: 'white', textAlign: 'center'}} className='ico' />
          </div>

          <ul className='hidden sm:flex gap-8 p-4 uppercase md:text-sm md:font-bold font-popins rounded-lg text-[#f5f5f5]'>
            <li className='hover:underline underline-offset-4'><a href=''>Home</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Handouts</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Past Questions</a></li>
            <li className='hover:underline underline-offset-4'><a href=''>Contact</a></li>
            <Button primaryGreen='#0f9d58'/>
          </ul>
      

          <MenuItems handleNavbar={handleNavbar} active={active}></MenuItems>
      </nav>
     </div>
    </div>
  )
}
