import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className='App'>
    <h1 className='headerStyle'>Welcome To React</h1>
    <button className='icon'>
      <FaFacebook />
    </button>
    
    <button className='icon'>
      <FaYoutube />
    </button>

    <button className='icon'>
      <FaLinkedin />
    </button>

  </div>
  )
}


export default App;