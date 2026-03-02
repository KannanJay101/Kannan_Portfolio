import React, { useState, useEffect, useCallback } from 'react';
import './BootSequence.css';

const SHIELD_SEGMENTS = 12;
const PHASE_TIMING = {
  damageStart: 200,
  warningFlash: 600,
  rechargeStart: 1600,
  segmentInterval: 120,
  rechargedHold: 800,
  fadeOut: 600,
};

const BootSequence = ({ onComplete }) => {
  const [phase, setPhase] = useState('damage');
  const [filledSegments, setFilledSegments] = useState(0);
  const [warningFlash, setWarningFlash] = useState(false);
  const [recharged, setRecharged] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [done, setDone] = useState(false);

  const onCompleteCb = useCallback(() => onComplete?.(), [onComplete]);

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setWarningFlash(true), PHASE_TIMING.damageStart));

    timers.push(setTimeout(() => {
      setPhase('recharging');
    }, PHASE_TIMING.rechargeStart));

    for (let i = 1; i <= SHIELD_SEGMENTS; i++) {
      timers.push(setTimeout(() => {
        setFilledSegments(i);
      }, PHASE_TIMING.rechargeStart + i * PHASE_TIMING.segmentInterval));
    }

    const rechargedTime = PHASE_TIMING.rechargeStart + SHIELD_SEGMENTS * PHASE_TIMING.segmentInterval + 200;

    timers.push(setTimeout(() => {
      setPhase('recharged');
      setRecharged(true);
    }, rechargedTime));

    timers.push(setTimeout(() => {
      setFadeOut(true);
    }, rechargedTime + PHASE_TIMING.rechargedHold));

    timers.push(setTimeout(() => {
      setDone(true);
      onCompleteCb();
    }, rechargedTime + PHASE_TIMING.rechargedHold + PHASE_TIMING.fadeOut));

    return () => timers.forEach(clearTimeout);
  }, [onCompleteCb]);

  if (done) return null;

  const shieldPercent = Math.round((filledSegments / SHIELD_SEGMENTS) * 100);

  return (
    <div className={`shield-boot ${fadeOut ? 'shield-boot--fade' : ''}`}>
      <div className={`shield-boot__damage-vignette ${phase === 'damage' ? 'active' : ''}`}></div>

      {recharged && <div className="shield-boot__recharge-flash"></div>}

      <div className="shield-boot__center">
        {phase === 'damage' && warningFlash && (
          <div className="shield-boot__warning">
            <div className="shield-boot__warning-icon">⚠</div>
            <div className="shield-boot__warning-text">SHIELDS DEPLETED</div>
            <div className="shield-boot__warning-sub">CRITICAL DAMAGE SUSTAINED</div>
          </div>
        )}

        {(phase === 'recharging' || phase === 'recharged') && (
          <div className="shield-boot__recharge">
            <div className="shield-boot__label">
              {recharged ? 'SHIELDS RECHARGED' : 'SHIELDS RECHARGING'}
            </div>

            <div className="shield-boot__bar-container">
              <div className="shield-boot__bar-track">
                {Array.from({ length: SHIELD_SEGMENTS }, (_, i) => (
                  <div
                    key={i}
                    className={`shield-boot__segment ${i < filledSegments ? 'filled' : ''} ${i === filledSegments - 1 ? 'latest' : ''}`}
                  ></div>
                ))}
              </div>
              <div className="shield-boot__bar-glow" style={{ width: `${shieldPercent}%` }}></div>
            </div>

            <div className="shield-boot__percent">
              {shieldPercent}%
            </div>

            {recharged && (
              <div className="shield-boot__ready">
                <span>WELCOME, SPARTAN</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="shield-boot__hud-corners">
        <div className="shield-boot__corner shield-boot__corner--tl"></div>
        <div className="shield-boot__corner shield-boot__corner--tr"></div>
        <div className="shield-boot__corner shield-boot__corner--bl"></div>
        <div className="shield-boot__corner shield-boot__corner--br"></div>
      </div>
    </div>
  );
};

export default BootSequence;
