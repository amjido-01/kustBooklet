import React from 'react'
import { Header2 } from '../Header'
import { NavLink, Outlet } from 'react-router-dom'
import { Amjido } from './Amjido'
import { Prof } from './Prof'


export const AboutPage = () => {

  // const navLinkStyle = ({ isActive }) => {
  //   return {
  //   textDecoration: isActive ? 'underline' : 'none',
  //   textDecorationColor: isActive ? '#0F9D58': 'none',
  //   textDecorationThickness: isActive ? '2px' : '0px'
  //   }
  // }

  return (
    <div>
      <Header2 />
      <div className='mx-auto mt-24 sm:mt-40 md:mt-48'>
        {/* <h1 className='mt-20'>AboutPage</h1> */}
        <div className='mx-auto flex flex-col justify-center items-center gap-6 sm:flex-row sm:flex-wrap'>
          <Amjido />
          <Prof />
          <Amjido />
        </div>
      </div>

      {/* <nav>
        <ul className='flex '>
          <NavLink style={navLinkStyle} to='amjido' className='px-2'>amjido_01</NavLink>
          <NavLink style={navLinkStyle} to='profs' >Mrprop</NavLink>
        </ul>
      </nav> */}
      {/* <Outlet /> */}
    </div>
  )
}
