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
                Hi there! I'm Yiğit, a dedicated and enthusiastic web developer with a keen eye for detail and a passion for creating intuitive, 
                user-friendly web applications. With a solid foundation in front-end technologies, I specialize in building responsive and engaging 
                websites using HTML, CSS, and JavaScript. My journey began with a fascination for how the web works, and it has evolved into a 
                full-fledged career where I constantly seek to learn and implement the latest web technologies.
                </p>
                <p>
                I have hands-on experience with modern frameworks and libraries like React, which allows me to develop dynamic and 
                efficient single-page applications. Additionally, I am proficient in working with back-end technologies such as 
                Node.js to build robust and scalable server-side applications. My skills also extend to version control with Git, 
                which helps me manage and collaborate on projects effectively.
                </p>
                <p>
                I thrive on challenges and enjoy problem-solving through code. Whether it’s optimizing performance, enhancing user experience, 
                or implementing new features, I’m always excited to tackle new problems and deliver high-quality solutions. When I'm not coding, 
                you can find me exploring new technologies, contributing to open-source projects, or honing my skills through online courses and tutorials.
                </p>
                <p>
                If you're looking for someone who is passionate about web development and committed to delivering exceptional results, 
                feel free to reach out. I’m always open to new opportunities and collaborations that allow me to push the boundaries of what’s possible on the web.
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