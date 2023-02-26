import { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Root} from './routes/Root';
import {About} from './routes/About';
import { Login } from './routes/Login';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={ < Root /> }></Route>
      <Route path='about' element={ < About /> }></Route>
      <Route path='login' element={ < Login /> }></Route>
    </Routes>
  )
}

export default App
