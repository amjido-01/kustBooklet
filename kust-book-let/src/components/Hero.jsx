import React from 'react'
import { DownloadBtn } from './DownloadBtn'
import { SearchInput } from './SearchInput'

// import {Rectangle} from '../assets/images/hero.png'

export const Hero = () => {
  return (
    <div>
        <div className='hero text-white h-96 flex items-center justify-center'>
        <div className="hero-text text-center mt-16">
          <h1 className=' font-popins text-[25px] md:text-[28px] font-semibold md:font-bold  md:leading-10 w-[60%] md:w-3/4 mx-auto'>free website for kUST students (Kusties)</h1>
          <p className='font-popins font-semibold mt-3 md:mt-2 leading-5  md:font-semibold md:leading-7 text-[15px] md:text-[18px] w-[60%] md:w-3/4 mx-auto'>to download their favorites Handouts and past question papers.</p>

            <DownloadBtn />

          <div className='hidden md:block  mt-10'>
            <SearchInput />
          </div>

        </div>
    </div>
    </div>
  )
}
