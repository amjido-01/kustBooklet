import React from 'react'
import { Header2 } from '../Header'
import { Hero } from '../Hero'
import {MainContent} from '../MainContent'
import {Footer} from '../Footer'
// import Loding from './Loding'

const Home = () => {
  return (
    <div>
        {/* <Loding /> */}
        <Header2 />
        < Hero />
        <MainContent />
        <Footer />
    </div>
  )
}

export default Home