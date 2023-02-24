import React from 'react'

// import {Rectangle} from '../assets/images/hero.png'

export const Hero = () => {
  return (
    <div>
        <div className='hero text-white h-96 flex items-center justify-center '>
        <div className="hero-text text-center">
          <h1 className=' font-popins text-[28px] font-bold leading-10 w-3/4 mx-auto'>free website for kUST students (Kusties)</h1>
          <p className='font-popins font-medium leading-7 text-[14px] w-3/4 mx-auto'>to download their favorites Handouts and past question papers.</p>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  mt-10
          
          
          
          
          
          ">
            <svg className="fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
          </button>
        </div>
    </div>
    </div>
  )
}
