import { useState, useEffect } from 'react'
import './App.css'
import { Header2 } from './Header'
import { Hero } from './components/Hero'
import { Loding } from './components/Loding.jsx'


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 8000)
  })

  return (
   <div>
      {
        isLoading ? (<Loding />) : (<div>
            <Header2 />
            < Hero />
        </div>)
      }
    </div>
  )
}

export default App
