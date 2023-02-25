import React from 'react'
import Content from './Content'

const MainContent = () => {
  return (
    <div className='bg-[#1F1F1F] flex flex-col main-content md:flex-row justify-center items-center '>
        <Content bg='#98EBDB' />
        <Content bg='#CB8ECC' />
    </div>
  )
}

export default MainContent