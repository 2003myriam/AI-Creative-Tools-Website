import { useState } from 'react'
 
import './App.css'
import Navar from './components/NavBar/Navar'
import HeroSection from './components/HeroSection/HeroSection'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <>
    <Navar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    
    

  
     
    </>
  )
}

export default App
