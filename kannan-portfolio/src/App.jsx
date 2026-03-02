import React, { useState } from 'react';
import BootSequence from './components/BootSequence';
import Starfield from './components/Starfield';
import HudOverlay from './components/HudOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="App">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      <Starfield />
      <HudOverlay />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="footer__unsc-bar"></div>
        <p className="footer__terminal">&gt; MJOLNIR GEN III ONLINE // SPARTAN-K77 DEPLOYED</p>
        <div className="footer__status">
          <span>SHIELDS: FULL</span>
          <span>ARMOR: LOCKED</span>
          <span>CORTANA: STANDBY</span>
        </div>
        <p>&copy; 2025 Kannan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
