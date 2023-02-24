import React from 'react'

export const DownloadBtn = () => {
  return (
    <div className='block md:hidden'>
    <button className="hidden w-[60%] bg-[#4285F4] text-gray-800 font-bold py-2 px-4 rounded  mt-10 ">
      <span className='px-2'>Download</span>
      <svg className="fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    </button>
    </div>
  )
}
