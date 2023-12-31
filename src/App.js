import React from 'react'
import  Home from './components/home';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home'element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
