import React from 'react'
import "./Pricing componenets.css"
import { MdDone } from "react-icons/md";
function PricingComponenet() {
  return (
    <>
      <div className="ourtools-part1">
        <h3>Pricing</h3>
        <h2>Simple plans. Cosmic value.</h2>
      </div>

      <div className="parent3">

        {/* FREE */}
        <div className="div4">
          <h4 className='pricingType'>Free</h4>

          <h1 className='Price'>0 DZ</h1>

          <p className='pricingType'>For curious creators</p>

          <ul className='listPricing'>
            <li><MdDone className='PricingIcone' /> 3 AI tools</li>
            <li><MdDone className='PricingIcone'  /> 20 generations</li>
            <li><MdDone className='PricingIcone' /> Community support</li>
            <li><MdDone className='PricingIcone' /> Basic image quality</li>
          </ul>

          <button className='Navbar-btn'>Start Free</button>
        </div>

        {/* PRO */}
        <div className="div5" id='Pro_div'>
          <h2 className='MostPopular'>Most Popular</h2>
          <h4 className='pricingType'>Pro</h4>

          <h1 className='Price'>2500 DZ</h1>

          <p className='pricingType'>For serious creators & developers</p>

          <ul className='listPricing'>
            <li><MdDone className='PricingIcone'  /> Unlimited generations</li>
            <li><MdDone className='PricingIcone'  /> All AI tools access</li>
            <li><MdDone className='PricingIcone'  /> HD image generation</li>
            <li><MdDone className='PricingIcone'  /> Priority rendering</li>
            <li><MdDone className='PricingIcone'  /> Advanced prompts</li>
          </ul>

          <button className='Navbar-btn' id='Pro-btn'>Go Pro</button>
        </div>

        {/* ENTERPRISE */}
        <div className="div6">
          <h4 className='pricingType'>Enterprise</h4>

          <h1 className='Price'>Custom</h1>

          <p className='pricingType'>For teams and large scale projects</p>

          <ul className='listPricing'>
            <li><MdDone className='PricingIcone'  /> Unlimited everything</li>
            <li><MdDone className='PricingIcone' /> Dedicated AI infrastructure</li>
            <li><MdDone className='PricingIcone' /> Team collaboration</li>
            <li><MdDone className='PricingIcone' /> Premium support</li>
            <li><MdDone className='PricingIcone' /> Custom integrations</li>
          </ul>

          <button className='Navbar-btn'>Contact Us</button>
        </div>

      </div>
    </>
  )
}

export default PricingComponenet