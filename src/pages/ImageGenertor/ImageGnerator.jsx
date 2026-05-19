import React from 'react'
import Navar from '../../components/NavBar/Navar'
import './ImageGenerator.css'
import { IoIosSend } from "react-icons/io";

function ImageGnerator() {
  return (
     <>
     <div className='imageGnerator'>
      <div className='imageGneraor_historique'>
        <button className='Navbar-btn'>Add Chat</button>
      </div>
      <div className='imageGneraor_chat'>
  <div className='imageGneraor-ipt_btn'>
    <input type="text" />
    <button><IoIosSend className='icone_imageGenerator'/></button>
  </div>
</div>

     </div>
     </>
  )
}

export default ImageGnerator
