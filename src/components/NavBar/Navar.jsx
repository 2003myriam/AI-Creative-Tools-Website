import React from 'react'
import "./NavBar.css"
function Navar() {
  return (
     <>
     <div className='navbar-bg'>
     <ul className='NavBar'>
      <img src="/src/assets/logo.png" alt="AI" className='navbar-logo' />
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
