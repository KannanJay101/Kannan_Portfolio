import React, { useState, useEffect } from 'react';
import './BootSequence.css';

const BOOT_LINES = [
  { text: '> INITIALIZING NEURAL LINK...', delay: 0 },
  { text: '> CONNECTING TO NIGHT CITY NET...', delay: 400 },
  { text: '> BYPASSING ICE PROTOCOLS...', delay: 800 },
  { text: '> DECRYPTING PORTFOLIO DATA [████████████] 100%', delay: 1300 },
  { text: '> BREACH SUCCESSFUL', delay: 1900, highlight: true },
  { text: '> WELCOME, NETRUNNER.', delay: 2300, highlight: true },
];

const BootSequence = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay)
    );

    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const doneTimer = setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 3600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div className={`boot-overlay ${fadeOut ? 'boot-overlay--fade' : ''}`}>
      <div className="boot-terminal">
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={`boot-line ${line.highlight ? 'boot-line--highlight' : ''}`}
          >
            {line.text}
          </div>
        ))}
        <span className="boot-cursor">_</span>
      </div>
    </div>
  );
};

export default BootSequence;
