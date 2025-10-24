import React from 'react';
import HelmetScene from './Helmet'; // 1. Import the new component
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* 2. Add the 3D scene component here, inside a wrapper */}
      <div className="hero-background-scene">
        <HelmetScene />
      </div>

      {/* 3. All your existing content is now layered on top */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kannan</span>
        </h1>
        <h2 className="hero-subtitle">Computer Engineer</h2>
        <p className="hero-description">
          Computer Engineer at SFU. I build systems from silicon to screen—from C++ firmware for robotics and VHDL for FPGAs to full-stack web apps and games in Unreal Engine 5.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;