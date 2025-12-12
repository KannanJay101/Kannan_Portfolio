import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'VHDL Implementation of RV64I Execution Unit on FPGA',
      description: 'Developed a VHDL-based RV64I execution unit and successfully implemented it on an FPGA board, achieving efficient instruction processing and performance optimization.',
      technologies: ['VHDL'],
      image: 'https://media.licdn.com/dms/image/v2/D5622AQENYPZCOPanYQ/feedshare-shrink_1280/B56ZZJ5e2VHsAk-/0/1744996527792?e=1767225600&v=beta&t=LWx34IxCPX7FPR5tqvNS-7gTOis49CqnAj4yn8KqjKE',
      github: 'https://github.com/KannanJay101/RV64I-Execution-Unit-FPGA-Design-',
      demo: '#',
    },
    {
      title: 'Tank Blaster Game',
      description: 'Created a 3D tank blaster game using C++ in Unreal Engine, featuring immersive gameplay, dynamic environments, and engaging combat mechanics.',
      technologies: ['C++', 'Unreal Engine'],
      image: 'public/Screenshot 2025-12-12 at 10-54-14 Kannan Coop Symposium - Google Slides.png',
      github: 'https://github.com/KannanJay101/BattleBlaster',
      demo: 'https://kannanjay101.itch.io/tank-blaster-game',
    }

  
   
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
