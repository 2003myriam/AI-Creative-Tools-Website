import { useState } from 'react'
 
import './App.css'
import Navar from './components/NavBar/Navar'
import HeroSection from './components/HeroSection/HeroSection'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ImageGnerator from './pages/ImageGenertor/ImageGnerator'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <Navar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/image_generator' element={<ImageGnerator/>}/>
     </Routes>
     <Footer/>
    
    

  
     
    </>
  )
}

export default App
