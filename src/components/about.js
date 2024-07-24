import React from "react";
import './about.css';
import { 
    
    FaHtml5, FaCss3Alt, 
    FaJsSquare, FaReact, 
    FaNodeJs, FaGitAlt,
    FaPython, FaBootstrap,
    FaNpm, FaAngular,
    FaWindows, FaLinux

} from 'react-icons/fa';

function About() {
    return (
        <section id="about">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="skills">
                    <h3>Techs</h3>
                    <ul>
                        <li><FaHtml5 className="icon" /> HTML</li>
                        <li><FaCss3Alt className="icon" /> CSS</li>
                        <li><FaJsSquare className="icon" /> JavaScript</li>
                        <li><FaReact className="icon" /> React</li>
                        <li><FaNodeJs className="icon" /> Node.js</li>
                        <li><FaGitAlt className="icon" /> Git</li>
                    </ul>
                    <ul>
                        <li><FaPython className="icon" /> Python</li>
                        <li><FaBootstrap className="icon" /> Bootstrap</li>
                        <li><FaNpm className="icon" /> Npm</li>
                        <li><FaAngular className="icon" /> Angular</li>
                        <li><FaWindows className="icon" /> Windows</li>
                        <li><FaLinux className="icon" /> Linux</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
