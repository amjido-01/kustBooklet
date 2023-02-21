import React from 'react'
import { useState } from 'react'
import { MenuItems } from './components/MenuItems'
import {HiMenuAlt3} from 'react-icons/hi'

export const Header2 = () => {
  const [active, setActive] = useState(false)

  const handleNavbar = () => {
      setActive(!active)
  }

  return (
    <div className='fixed w-full bg-green-600 text-white items-center flex justify-between text-center'>
      <div className="logo text-center font-bold">
        <span className=''> KustBooklet </span>
      </div>
    
      <nav>
          <div className=' absolute right-6 md:hidden cursor-pointer scale-150 '>
            <HiMenuAlt3 onClick={ handleNavbar } style={{ color: 'white'}} />
          </div>

        <ul className='hidden md:flex gap-8 p-6 uppercase'>
          <li><a href=''>Home</a></li>
          <li><a href=''>Handouts</a></li>
          <li><a href=''>Past Questions</a></li>
          <li><a href=''>Contact</a></li>
        </ul>

        <MenuItems handleNavbar={handleNavbar} active={active}></MenuItems>

      </nav>
    </div>
  )
}
