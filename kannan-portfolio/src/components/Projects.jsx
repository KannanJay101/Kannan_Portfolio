import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x250/646cff/ffffff?text=E-Commerce',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x250/535bf2/ffffff?text=Task+Manager',
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with forecasts, maps, and location-based weather alerts.',
      technologies: ['React', 'Weather API', 'Chart.js'],
      image: 'https://via.placeholder.com/400x250/4a90e2/ffffff?text=Weather+App',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'A social media platform with posts, comments, likes, and real-time messaging.',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://via.placeholder.com/400x250/7b68ee/ffffff?text=Social+Media',
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
