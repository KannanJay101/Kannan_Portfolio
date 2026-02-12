import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Profile Photo */}
      <div className="profile-photo-container">
        <img 
          src="/Kannanpfp.JPG"
          alt="Kannan" 
          className="profile-photo"
        />
      </div>

      {/* All your existing content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kannan</span>
        </h1>
        <h2 className="hero-subtitle">Computer Engineer</h2>
        <p className="hero-description">
          Computer Engineer at SFU. I build systems from silicon to screen from C++ firmware for robotics and VHDL for FPGAs to full-stack web apps and games in Unreal Engine 5.
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