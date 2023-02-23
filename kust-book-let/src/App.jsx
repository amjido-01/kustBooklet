import { useState, useEffect } from 'react'
import './App.css'
import { Header2 } from './Header'
import { Hero } from './components/Hero'
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
    </div>
  )
}

export default App
