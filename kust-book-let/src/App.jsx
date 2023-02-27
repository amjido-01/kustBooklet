import { useState, useEffect } from 'react';
import './App.css';
import { Amjido } from './components/pages/Amjido';
import { Prof } from './components/pages/Prof';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Root} from './routes/Root';
import {About} from './routes/About';
import { Login } from './routes/Login';
import { NotFound } from './routes/NotFound';




function App() {
  
  return (
    <Routes>
      <Route path='/' element={ < Root /> }></Route>
      <Route path='about' element={ < About /> }>
        <Route path='amjido' element={ <Amjido /> }></Route>
        <Route path='profs' element={ <Prof />}></Route>
      </Route>
      <Route path='login' element={ < Login /> }></Route>
      <Route path='*' element={ < NotFound /> }></Route>
    </Routes>
  )
}

export default App
