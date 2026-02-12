import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Firmware Software Engineer (Student Team)',
      company: 'SFU Soccer Robotics',
      location: 'Burnaby, BC',
      period: 'Jan 2025 - Present',
      image: '/SFURS.png',
      imageAlt: 'STM32 microcontroller and embedded electronics',
      description: [
        'Reduced main loop cycle time by 20% for the Robot V2 upgrade by spearheading the firmware implementation using STM32 HAL on an STM32F7 microcontroller.',
        'Achieved less than 2% steady-state error in trajectory tracking by designing and implementing PID control loops for motor velocity and position.',
        'Ensured sub-millisecond latency for 8+ concurrent sensor tasks by architecting a priority-based task scheduling system.',
        'Reduced average debugging time by 30% during hardware failure analysis by implementing real-time telemetry and diagnostic logging in C.',
      ],
    },
    {
      title: 'Software Engineer Intern (IT Co-op)',
      company: 'Aspect Biosystems',
      location: 'Vancouver, BC',
      period: 'May 2025 - Dec 2025',
      image: '/Aspect.png',
      imageAlt: 'Aspect Biosystems - Bioprinting Tissue Therapeutics',
      description: [
        'Eliminated 10+ hours of manual data entry per week for the engineering team by engineering an end-to-end internal CMS utilizing Java and HTML.',
        'Achieved 100% version consistency across 50+ devices by deploying security-compliant automation scripts (Bash/PowerShell) in a cross-functional team.',
        'Reduced account provisioning time from 2 days to 1 hour by automating 90% of user onboarding processes using Python scripts.',
        'Reduced Tier 1 support ticket volume by 25% by building a responsive Chatbot using React and REST APIs to automate support responses.',
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
                  <div className="experience-header-text">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                {exp.image && (
                  <div className="experience-image-wrapper">
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="experience-image"
                    />
                  </div>
                )}
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
