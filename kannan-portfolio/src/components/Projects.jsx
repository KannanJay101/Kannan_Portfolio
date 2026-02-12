import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'VHDL Implementation of RV64I Execution Unit on FPGA',
      description: 'Developed a VHDL-based RV64I execution unit and successfully implemented it on an FPGA board, achieving efficient instruction processing and performance optimization.',
      technologies: ['VHDL'],
      image: '/VHDL.png',
      github: 'https://github.com/KannanJay101/RV64I-Execution-Unit-FPGA-Design-',
      demo: '#',
    },
    {
      title: 'CUDA-Accelerated Deep Learning Model',
      description: 'Achieved 98% accuracy on MNIST digit recognition with 12x speedup in training. Optimized cache usage for 60,000+ images using C++ and CUDA.',
      technologies: ['C++', 'CUDA', 'AI/ML'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Nvidia_CUDA_Logo.jpg',
      github: '#',
      demo: '#',
    },
    {
      title: 'Tank Blaster Game',
      description: 'Created a 3D tank blaster game using C++ in Unreal Engine 5, maintaining stable 60 FPS, reusable UHealthComponent, and complex projectile physics with collision detection.',
      technologies: ['C++', 'Unreal Engine 5'],
      image: '/Screenshot 2025-12-12 at 10-54-14 Kannan Coop Symposium - Google Slides.png',
      github: 'https://github.com/KannanJay101/BattleBlaster',
      demo: 'https://kannanjay101.itch.io/tank-blaster-game',
    },
    {
      title: 'Azure Developer CLI (azd) Contribution',
      description: 'Contributed to Azure Developer CLI to reduce API integration complexity and cut initial environment setup time by 40% using REST APIs and Azure SDKs.',
      technologies: ['Azure', 'REST APIs', 'SDKs'],
      image: 'https://swimburger.net/media/ppnn3pcl/azure.png',
      github: '#',
      demo: '#',
    },
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
