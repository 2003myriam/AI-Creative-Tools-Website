import React from "react";
import "./HeroSection.css";
import TyperWrite from "../TypeWriteComponenets/TyperWrite";

export default function HeroSection() {

  return (
    <div className="herosection_bg">

      <h1 className="hero-title">
        The creative AI suite built to <TyperWrite words={["Generate", "Create", "Design"]}   />
      </h1>
      <p className="hero-paragraphe">One immersive workspace for prompts, captions, palettes, ideas and chat — wrapped in a futuristic interface that gets out of your way.</p>
      <div className="hero-btn">
      <button className='Navbar-btn btn' >Explore Tools</button>
      <button className='hero-btn2 btn '>Try IA Chat</button>
      </div>
     
      <div className="rond1">
        <div className="rond1-container">
          <div className="blob-rond1"></div>
        </div>
      </div>
      <p className="hero-trust">Trusted By Teams Shipping The Future</p>
      <ul className="hero-list">
        <li>ORBITAL</li>
        <li>AURORA</li>
        <li>VANTA</li>
        <li>PULSE</li>
        <li>QUARK</li>
      </ul>
    </div>
  );
}