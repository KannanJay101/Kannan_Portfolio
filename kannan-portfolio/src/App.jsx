import React, { useState } from 'react';
import BootSequence from './components/BootSequence';
import CodeRain from './components/CodeRain';
import HudOverlay from './components/HudOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="App">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      <CodeRain />
      <HudOverlay />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="footer">
        <p className="footer__terminal">&gt; SESSION ACTIVE // KANNAN.SYS v2.077</p>
        <div className="footer__status">
          <span>NEURAL LINK: STABLE</span>
          <span>ICE: DISABLED</span>
          <span>UPLINK: 100%</span>
        </div>
        <p>&copy; 2025 Kannan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
