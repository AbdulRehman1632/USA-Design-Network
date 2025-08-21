import React from 'react'
import { useNavigate } from 'react-router';
import TextAnimation from '../../../Utils/Constant/TextAnimation/TextAnimation';
import "./MainBanner.css"

const MainBanner = () => {
     const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };
  return (
    <div className="video-banner">
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/videobanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        
      </video>

      

      <div  className="video-content">
      
        {/* <h1>Start Your E-Commerce Journey</h1> */}
        <h1 >Be the next</h1>
        
        <TextAnimation/>

        <p>Dream big, build fast, and grow far with USA Design Network.</p>

        <button onClick={handleClick}>Get Started</button>
      </div>
    </div>
  )
}

export default MainBanner
