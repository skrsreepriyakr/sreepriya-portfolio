
import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.scss";

function Projects() {
  return (
<section className="projects-section" id="projects">
  <motion.div
    className="projects-container"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3>Projects</h3>
    <p>
      Here are a few personal and practice projects I'm working on to sharpen my frontend skills.
    </p>
    <p>
      During my time in previous companies, I developed full UI for major internal projects and several static websites using HTML, CSS, and Bootstrap. Due to privacy policies, I’m unable to showcase those here. However, I’d be happy to explain them in detail if needed.
    </p>
    <p>
      These personal projects are created independently to explore new tools, improve my skills, and grow my portfolio. Please don't judge my abilities based solely on these — more updates are on the way!
    </p>

    <div className="projects-grid">
    <div className="project-card">
  <h4>JavaScript Mini Projects</h4>
  <p>A collection of small JavaScript projects like number guessing game, dice roller, and more — all linked from a single HTML page.</p>
  <div className="tags">
    <span>JavaScript</span>
    <span>HTML</span>
    <span>CSS</span>
  </div>
  <div className="status">✅ Completed</div>
  <div className="status-links">
    <a href="https://skrsreepriyakr.github.io/Javascript-projects/" target="_blank" rel="noopener noreferrer">🔗 <span>Live</span></a>
    <a href="https://github.com/skrsreepriyakr/Javascript-projects" target="_blank" rel="noopener noreferrer">💻 <span>Code</span></a>
  </div>
</div>

<div className="project-card">
  <h4>Portfolio Website</h4>
  <p>A personal portfolio built using React and SCSS to showcase my work and skills.</p>
  <div className="tags">
    <span>React</span>
    <span>SCSS</span>
  </div>
  {/* <div className="status">🚧 In Progress</div> */}
    <div className="status">✅ Completed</div>
   <div className="status-links">
    <a href="https://skrsreepriyakr.github.io/sreepriya-portfolio/#contact" target="_blank" rel="noopener noreferrer">🔗 <span>Live</span></a>
    <a href="https://github.com/skrsreepriyakr/sreepriya-portfolio" target="_blank" rel="noopener noreferrer">💻 <span>Code</span></a>
  </div>
</div>

      <div className="project-card">
        <h4>React Mini Projects</h4>
        <p>
          A collection of small JavaScript projects like number guessing game, dice roller, and more — all linked from a single HTML page.
        </p>
        <div className="tags">
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className="status">🚧 In Progress</div>
        {/* <div className="status-links">
          <a href="https://your-js-project-live-link.com" target="_blank" rel="noopener noreferrer">🔗 Live</a>
          <a href="https://github.com/your-js-project-repo" target="_blank" rel="noopener noreferrer">💻 Code</a>
        </div> */}
      </div>
      
    </div>

    <p className="note">🚧 More projects are in development. Stay tuned!</p>
  </motion.div>
</section>

  );
}

export default Projects;
