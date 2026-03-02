import React, { useState, useEffect } from 'react';
import './Hero.css';

const TYPING_TEXT = "Computer Engineer at SFU. I build systems from silicon to screen from C++ firmware for robotics and VHDL for FPGAs to full-stack web apps and games in Unreal Engine 5.";

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTyped(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

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
        <p className="hero-description typing-text">
          <span className="typing-prefix">&gt; </span>
          {typed}
          <span className={`typing-cursor ${showCursor ? '' : 'typing-cursor--hidden'}`}>|</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="cybr-btn">
            View My Work
            <span className="cybr-btn__glitch">View My Work</span>
            <span className="cybr-btn__tag">K77</span>
          </a>
          <a href="#contact" className="cybr-btn cybr-btn--secondary">
            Contact Me
            <span className="cybr-btn__glitch">Contact Me</span>
            <span className="cybr-btn__tag">NET</span>
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
