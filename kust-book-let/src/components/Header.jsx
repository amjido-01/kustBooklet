import React from 'react'
import { Button } from './Button'
import { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {HiOutlineX} from 'react-icons/hi'

const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNavbar = () => {
        setNav(!nav)
    }
  return (
    <div className='bg-[#323232] flex justify-between px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-2 border-red-500'>
        <div className='logo'>
            <span className='self-center p-4  mt-4 md:space-x-8 md:my  text-xl font-semibold whitespace-nowrap text-[#f5f5f5]'>Kust<span className='text-[#0f9d58]'>Booklet</span> </span>
        </div>
        <div className="menu border-2 hidden md:flex">
            <ul className='hidden md:flex font-popins p-2 text-[#f5f5f5] mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold md:border-0'>
                <li className='cursor-pointer hover:underline'><a href="#">Home</a></li>
                <li className='cursor-pointer'><a href="">Handouts</a></li>
                <li className='cursor-pointer'><a href="">Past Questions</a></li>
                <li className='cursor-pointer'><a href="">Contact</a></li>
            </ul>
            <Button primaryGreen='#0f9d58'/>
        </div>
        <div  onClick={handleNavbar} className='text-white block md:hidden'>
            {!nav ? <HiMenuAlt3 style={{ color: 'red'}} />
                : <HiOutlineX className=''/>
            }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-300 bg-white ease-in-out duration-500' : 'fixed -left-[100%]'}>
            <div className='logo'>
                <span className='self-center p-4 mt-4 md:space-x-8 md:my  text-xl font-semibold whitespace-nowrap text-[#f5f5f5]'>Kust<span className='text-[#0f9d58]'>Booklet</span> </span>
            </div>
           <ul className='pt-5'>
                <li className='cursor-pointer hover:underline p-4'><a href="#">Home</a></li>
                <li className='cursor-pointer p-4'><a href="">Handouts</a></li>
                <li className='cursor-pointer p-4'><a href="">Past Questions</a></li>
                <li className='cursor-pointer p-4'><a href="">Contact</a></li>
           </ul>
        </div>
    </div>
  )
}

export default Header