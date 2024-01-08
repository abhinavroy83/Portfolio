import React from 'react';
import './Landing.css';
import abhinav from '../../assets/abhinavphoto.jpeg';
import { AnimatedText } from '../../Components';

function Landing() {
  return (
    <div className=" h-svh relative overflow-hidden md:grid md:place-items-center md:min-h-[800px]">
      <div className="circle bg-green-400" />
      <div className="content">
        <img src={abhinav} alt="Nfnd" />
        <div className="text text-white">
          <h1>Hi!</h1>
          <p>
            <span>My name is</span>
            {/* <span></span> */}
            <AnimatedText>Abhinav</AnimatedText>
        
            <span className="dot">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
