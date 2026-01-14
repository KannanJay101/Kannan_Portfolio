import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'IT Intern',
      company: 'Aspect Biosystems',
      location: 'Vancouver, BC',
      period: 'May 2025 - Dec 2025',
      description: [
        'Automated end-to-end device provisioning by developing custom configuration scripts, reducing manual setup time and eliminating human error in software validation.',
        'Partnered with engineering and lab teams to deploy technical solutions that streamlined internal workflows, ensuring high system availability in a fast-paced biotech environment.',
      ],
    },
    {
      title: 'Firmware Developer',
      company: 'SFURS',
      location: 'Burnaby, BC',
      period: 'Jan 2025 - present',
      description: [
        'Engineered and validated C-based firmware for tachometer (TACHO) and direction (DIRO) interfaces, enabling closed-loop feedback for precise motor velocity and directional tracking.',
        'Architected a robust logging framework to capture hardware signals, motor states, and sensor data, facilitating real-time debugging and data-driven post-match performance analysis.'
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
