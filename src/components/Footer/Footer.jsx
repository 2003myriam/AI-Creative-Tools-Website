import React from 'react'
import logo from '/src/assets/logo-removebg-preview.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "./Footer.css"

function Footer() {
  return (
    <>
   <div className="Footer">

  <div className="footer_row">

    {/* LEFT */}
    <div className="footer_brand">
      <img src={logo} alt="AI" className="navbar-logo" />

      <p>
        The creative operating system for the AI era. Generate, design, ideate — all from one futuristic workspace.
      </p>

      <ul className="footer_icons">
        <li><FaGithub /></li>
        <li><FaLinkedin /></li>
        <li><IoLogoTwitter /></li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="footer_links">
      <h2>Product</h2>
      <ul>
        <li>AI Tools</li>
        <li>Pricing</li>
        <li>AI Chat</li>
      </ul>
    </div>

  </div>

  <p className="footer_bottom">
    © 2026 Prompt Flow. Crafted in the void.
  </p>

</div>
    </>

  )
}

export default Footer
