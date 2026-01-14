import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
               As a Computer Engineering student at SFU with experience in industrial IT, I always strive to bridge the gap between complex hardware and high-performance software.

I am always ready to dive into technical challenges, whether that’s remaking a legendary game like Halo in Unreal Engine or designing a custom execution unit in VHDL.

I have experience with web development, embedded systems, and FPGA design, but am currently focused on mastering high-performance C++ and Rust.

Scroll down to see my experience and projects.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-stats">
              {/* <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div> */}
              {/* <div className="stat">
                <h3>10+</h3>
                <p>Happy Clients</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
