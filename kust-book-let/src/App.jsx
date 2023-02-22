import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header2 } from './Header2'
// import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header2></Header2>
    </div>
  )
}

export default App
