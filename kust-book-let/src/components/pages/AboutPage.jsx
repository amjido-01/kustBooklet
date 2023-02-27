import React from 'react'
import { Header2 } from '../Header'
import { NavLink, Outlet } from 'react-router-dom'

export const AboutPage = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
    textDecoration: isActive ? 'underline' : 'none',
    textDecorationColor: isActive ? '#0F9D58': 'none',
    textDecorationThickness: isActive ? '2px' : '0px'
    }
  }

  return (
    <div>
      <Header2 />
      <h1 className='mt-20'>AboutPage</h1>

      <nav>
        <ul className='flex '>
          <NavLink style={navLinkStyle} to='amjido' className='px-2'>amjido_01</NavLink>
          <NavLink style={navLinkStyle} to='profs' >Mrprop</NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
