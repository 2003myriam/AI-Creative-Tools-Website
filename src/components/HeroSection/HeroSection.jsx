import React from "react";
import "./HeroSection.css";
import TyperWrite from "../TypeWriteComponenets/TyperWrite";

export default function HeroSection() {

  return (
    <div className="herosection_bg">

      <h1 className="hero-title">
        The creative AI suite built to <TyperWrite words={["Generate", "Create", "Design"]}   />
      </h1>

      <div className="rond1">
        <div className="rond1-container">
          <div className="blob-rond1"></div>
        </div>
      </div>

    </div>
  );
}