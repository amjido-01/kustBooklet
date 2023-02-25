import React from 'react'
import Content from './Content'

const MainContent = () => {
  return (
    <div className='bg-[#1F1F1F] block md:flex'>
        <Content bg='#98EBDB' />
        <Content bg='#CB8ECC' />
    </div>
  )
}

export default MainContent