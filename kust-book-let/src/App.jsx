import { useState } from 'react'
import './App.css'
import { Header2 } from './Header'
import { Hero } from './components/Hero'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <Header2 />
      < Hero />
    </div>
  )
}

export default App
