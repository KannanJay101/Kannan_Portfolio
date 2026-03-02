import React, { useState, useEffect } from 'react';
import './HudOverlay.css';

const HudOverlay = () => {
  const [time, setTime] = useState('');
  const [dataStream, setDataStream] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hex = () => {
      const chars = '0123456789ABCDEF';
      return Array.from({ length: 8 }, () =>
        chars[Math.floor(Math.random() * 16)]
      ).join('');
    };
    const timer = setInterval(() => setDataStream(hex()), 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hud">
      <div className="hud__corner hud__corner--tl">
        <span className="hud__bracket">[</span>
        <span className="hud__label">SPARTAN-117</span>
        <span className="hud__bracket">]</span>
      </div>

      <div className="hud__corner hud__corner--tr">
        <span className="hud__time">{time}</span>
        <span className="hud__hex">MJOLNIR-{dataStream}</span>
      </div>

      <div className="hud__corner hud__corner--bl">
        <span className="hud__data">TACCOM://INFINITY</span>
        <span className="hud__data hud__data--dim">SIGNAL: {Math.floor(Math.random() * 5 + 1)}ms</span>
      </div>

      <div className="hud__corner hud__corner--br">
        <span className="hud__data hud__shield-indicator">SHIELDS: 100%</span>
        <span className="hud__data">STATUS: <span className="hud__status">OPERATIONAL</span></span>
      </div>

      <div className="hud__border hud__border--top"></div>
      <div className="hud__border hud__border--bottom"></div>
      <div className="hud__border hud__border--left"></div>
      <div className="hud__border hud__border--right"></div>
    </div>
  );
};

export default HudOverlay;
