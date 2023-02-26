import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoGithub} from 'react-icons/io'
import {GrLinkedinOption} from 'react-icons/gr'

export const Footer = () => {
  return (
    
    <footer style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}} className="text-center text-white">
      <div className="container px-6 pt-5">
        <div className="mb-5 flex justify-center">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-6 rounded-full  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <FaFacebook className="mx-auto h-full w-full"/>
          </a>
    
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-7 rounded-full  uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <AiFillTwitterCircle className="mx-auto h-full w-full"/>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-7 rounded-full uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light">
            <IoLogoGithub  className="mx-auto h-full w-full"/>
          </a>
        </div>
      </div>
    
      <div
        className="p-4 text-center"
        style={{backgroundColor: '#060606'}}>
          Copyright © 2023: 
        <a className="text-whitehite" href=""
          > Amjido_01 and Mrprofessor</a
        >
      </div> 
  </footer>
  
  )
}