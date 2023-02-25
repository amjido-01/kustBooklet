import { useState, useEffect } from 'react'
import './App.css'
import { Header2 } from './components/Header'
import { Hero } from './components/Hero'
import MainContent from './components/MainContent'
// import { Loding } from './components/Loding'


function App() {
  
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 8000)
  // })

  return (
   <div>
    {/* <Loding /> */}
      <Header2 />
      < Hero />
      <MainContent />
    </div>
  )
}

export default App
