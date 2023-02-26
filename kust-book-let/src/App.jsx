import { useState, useEffect } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Root} from './routes/Root'
import {About} from './routes/About'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={ < Root /> }></Route>
      <Route path='about' element={ < About /> }></Route>
    </Routes>
  )
}

export default App
