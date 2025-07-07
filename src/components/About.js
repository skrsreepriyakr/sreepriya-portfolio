import React from "react";
import { motion } from "framer-motion";
// import profilePic from "../assets/my-pic.jpg";
import "../styles/About.scss";

function About() {
  return (
<section className="about-section" id="about">
  <motion.div
    className="about-container"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Left Content */}
    <div className="about-left">
      <h3>Get to know me!</h3>

      {/* Thumbnail Image */}
      {/* <img className="about-thumbnail" src={profilePic} alt="Sreepriya's profile" onContextMenu={(e) => e.preventDefault()}/> */}

      <p>
        I'm a <strong>Frontend Developer</strong> with 3+ years of experience, focused on building clean and responsive interfaces for Websites and Web Applications. You can explore some of my work in the <strong>Projects</strong> section.
      </p>
      <p>
        Earlier in my career, I worked on websites using templates, but gradually moved to developing projects fully from scratch. At my previous company, I handled the complete UI for two major projects using HTML and CSS, along with multiple smaller static websites — though those weren’t my own personal projects.
      </p>
      <p>
        To showcase my individual skills, I’m now actively working on personal projects — designed, developed, and maintained fully by me — which you’ll find in the Projects section. I’m always pursuing new ideas to grow my portfolio and improve.
      </p>
      <p>
        I also enjoy sharing what I learn with others in the <strong>Web Development</strong> community. Feel free to connect with me on{" "}
        <a href="https://www.linkedin.com/in/sreepriya-k-r-2863a9200/" target="_blank" rel="noreferrer">
          LinkedIn<span className="link-icon">🔗</span>
        </a>.
      </p>
      <p>
        I'm open to <strong>Job</strong> opportunities where I can contribute, grow, and learn. If you think my experience aligns with your needs, please feel free to <strong>contact</strong> me.
      </p>

      <a href="#contact" className="btn contact-btn">Contact</a>
    </div>

    {/* Right Content */}
    <div className="about-right">
      <h4>My Skills</h4>
      <ul className="skills-points">
        <li>💡 HTML, CSS, JavaScript, Bootstrap</li>
        <li>🎨 Sass & Tailwind CSS for modern UI styling</li>
        <li>⚛️ React.js (currently learning & building independently)</li>
        <li>🛠️ Core PHP & MySQL experience</li>
        <li>📐 Figma to HTML conversion</li>
      </ul>
    </div>
  </motion.div>
</section>

  );
}

export default About;
