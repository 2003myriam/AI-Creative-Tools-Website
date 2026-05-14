import React from 'react'
import "./NavBar.css"
import logo from '/src/assets/logo-removebg-preview.png'
function Navar() {
  return (
     <>
     <div className='navbar-bg'>
     <ul className='NavBar'>
      <img src= {logo} alt="AI" className='navbar-logo' />
      <li>Home</li>
      <li>AI Tools</li>
      <li>Prompt Gen </li>
      <li>Chat</li>
      <li>Pricing</li>
      <li>About</li>
      <button className='Navbar-btn'>Launch App</button>
     </ul>
     </div>
     </>
  )
}

export default Navar
