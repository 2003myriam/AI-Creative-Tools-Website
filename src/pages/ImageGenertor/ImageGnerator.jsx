import React, { useState } from 'react'
import Navar from '../../components/NavBar/Navar'
import './ImageGenerator.css'
import { IoIosSend } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";


function ImageGnerator() {
const [chat, setChat] = useState(""); 
const [image, setImage] = useState(null);
const  generateImage=async()=>{
        try{
         const result = await fetch("http://localhost:5001/IA/generateImage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  prompt: chat,
})
}
         )      
          const Data= await result.blob()
          const imageUrl = URL.createObjectURL(Data);
          setImage(imageUrl);
         
        }
        catch(err){
          console.error("erreur",err)
        }
      }
const handelChange=(e)=>{
const prompt=e.target.value
setChat(prompt)
}
 return (
  <div className="imageGnerator">

    {/* LEFT PANEL */}
    <div className="imageGneraor_historique">
      <button className="Navbar-btn">Add Chat</button>
    </div>

    {/* RIGHT PANEL */}
    <div className="imageGneraor_chat">

      {/* ZONE MESSAGES (HAUT) */}
      <div className="messages">
       <h1 className='letsgenerate'>Let's Turn your ideas images <FaLightbulb className='letsgenerate_icone' /></h1>
        <p className="chat-text">{chat}</p>
          <img
            src={image}
            alt=""
            className="generated-image"
          />
      </div>

      {/* INPUT (BAS) */}
      <div className="imageGneraor-ipt_btn">
        <input
          type="text"
          value={chat}
          onChange={handelChange}
          placeholder="Describe your image..."
        />

        <button onClick={generateImage}>
          <IoIosSend className="icone_imageGenerator" />
        </button>
      </div>

    </div>
  </div>
);
}

export default ImageGnerator
