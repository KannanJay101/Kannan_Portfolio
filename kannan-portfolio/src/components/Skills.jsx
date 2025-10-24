import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
  // Programming Languages
  { name: 'C/C++', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Verilog / VHDL', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'Rust', level: 70 },

  // Embedded & Systems
  { name: 'Embedded Systems (Raspberry Pi, Microcontrollers)', level: 85 },
  { name: 'FPGA Design (Quartus, ModelSim)', level: 80 },
  { name: 'Firmware Development', level: 80 },
  { name: 'Linux Kernel / Driver Basics', level: 70 },

  // Full Stack Development
  { name: 'React.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'SQL', level: 75 },
  { name: 'HTML/CSS', level: 95 },

  // Tools & Technologies
  { name: 'Git & GitHub', level: 90 },
  { name: 'Docker', level: 70 },
  { name: 'FPGA Toolchains (Quartus, Vivado)', level: 80 },
  { name: 'VS Code / IDEs', level: 90 },

  // Additional Interests
  { name: 'Game Development (Unreal Engine 5)', level: 65 },
  { name: 'AI/ML Frameworks (TensorFlow, PyTorch)', level: 60 },
];


  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
