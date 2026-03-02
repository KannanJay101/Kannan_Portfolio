import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="scanlines"></div>

      <div className="profile-photo-container">
        <img 
          src="/Kannanpfp.JPG" 
          alt="Kannan" 
          className="profile-photo"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title glitch" data-text="Hi, I'm Kannan">
          Hi, I'm <span className="highlight">Kannan</span>
        </h1>
        <h2 className="hero-subtitle neon-flicker">Computer Engineer</h2>
        <p className="hero-description">
          Computer Engineer at SFU. I build systems from silicon to screen from C++ firmware for robotics and VHDL for FPGAs to full-stack web apps and games in Unreal Engine 5.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="cybr-btn">
            View My Work<span className="cybr-btn__glitch">View My Work</span><span className="cybr-btn__tag">K77</span>
          </a>
          <a href="#contact" className="cybr-btn cybr-btn--secondary">
            Contact Me<span className="cybr-btn__glitch">Contact Me</span><span className="cybr-btn__tag">NET</span>
          </a>
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
