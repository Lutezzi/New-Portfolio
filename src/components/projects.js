import React from "react";
import './project.css';

import p1 from '../img/spotify-clone.png';
import p2 from '../img/music-player-app.png';
import p3 from '../img/speed-test-app.png';
import p4 from '../img/random-pass-generator.png';
import p5 from '../img/to-do-extension.png';

const projects = [
    {
        title: 'Spotify Clone(old version)',
        image: p1,
        link: 'https://github.com/Lutezzi/Spotify-Clone'
    },
    {
        title: 'Music Player App',
        image: p2,
        link: 'https://github.com/Lutezzi/Music-Player-App'
    },
    {
        title: 'Speed Test App',
        image: p3,
        link: 'https://github.com/Lutezzi/Speed-Test'
    },
    {
        title: 'Random Password Generator',
        image: p4,
        link: 'https://github.com/Lutezzi/Random-Password-Generator'
    },
    {
        title: 'To-Do Extension(for Chrome)',
        image: p5,
        link: 'https://github.com/Lutezzi/To-Do-Extension'
    }
];

function Projects() {
    return (
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Projects;