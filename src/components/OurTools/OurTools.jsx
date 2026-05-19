import React from "react";
import "./OurTools.css";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
function OurTools() {
   
  return (
    <>
    <div className="OurTools_bg" id="tools">
      <div className="ourtools-part1">
        <h3>The toolkit</h3>
        <h2>Six tools. One workspace.</h2>
        <p>
          Every tool is designed for taste-driven makers — no clutter, no
          friction.
        </p>
      </div>
      <div  className="parent">
     <div  className="div1" > 
      <Link to={"/image_generator"} className="OurTollsLink" >
      <h2>Image Generator</h2> <p>Transform your imagination into unique images.</p> <div className="OurTools-btnicone"> <button className="OurTools-btn"> Open Tools <IoIosArrowDropright /> </button> </div>
      </Link>
      
         </div>
         
        <div className="div2">
          <h2>Caption Writer</h2>
          <p>Scroll-stopping captions, every single time.</p>
          <div className="OurTools-btnicone">
           <button className="OurTools-btn">Open Tools <IoIosArrowDropright/></button>
           </div>
        </div>
        <div className="div3">
          <h2>Logo Inspiration</h2>
          <p>Spark unique brand identities instantly.</p>

           <div className="OurTools-btnicone">
           <button className="OurTools-btn">Open Tools <IoIosArrowDropright/></button>
           </div>
        </div>
        <div className="div4">
          <h2>Color Palette</h2>
          <p>Generate harmonious palettes from a vibe.</p>
            <div className="OurTools-btnicone">
           <button className="OurTools-btn">Open Tools <IoIosArrowDropright/></button>
           </div>
        </div>
        <div className="div5">
          <h2>Content Ideas</h2>
          <p>Endless content angles tailored to your niche.</p>
           <div className="OurTools-btnicone">
           <button className="OurTools-btn">Open Tools <IoIosArrowDropright/></button>
           </div>
        </div>
        <div className="div6">
          <h2>Social Assistant</h2>
          <p>Plan, write, and ship across every channel.</p>
           <div className="OurTools-btnicone">
           <button className="OurTools-btn">Open Tools <IoIosArrowDropright/></button>
           </div>
        </div>
      </div>
      
      </div>
    </>
  );
}

export default OurTools;
