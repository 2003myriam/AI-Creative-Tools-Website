import React from 'react'
import "./HowItWorks.css"

function HowItWorks() {
  return (
     <>
     <div >
      <div className="ourtools-part1">
        <h3>How it works</h3>
        <h2>From idea to creation in three steps.</h2>
      </div>
       <div  className="parent2">
     <div  className="div1" > 
      <h2>01</h2> 
      <h3>Pick a tool</h3> 
      <p>Choose from our suite of creative AI tools designed for makers.</p>  
      </div>
        <div className="div2">
           <h2>02</h2> 
      <h3>Describe your vibe</h3> 
      <p>A sentence is enough — our models infer the rest.</p>  
        </div>
        <div className="div3">
          <h2>03</h2> 
      <h3>Generate & ship</h3> 
      <p>Refine, copy, export — straight into your workflow.</p> 
        </div>
      </div>
      
      </div>
     </>
  )
}

export default HowItWorks
