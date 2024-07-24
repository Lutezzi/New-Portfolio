import React from 'react';
import './footer.css';
import { 

  FaLinkedin, FaGithub,
  FaTwitter,

} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Lutezzi. All rights reserved.</p>
        <ul className="social-media">
          <li><a href="https://x.com/lutezzi" target="_blank" rel="noopener noreferrer"><FaTwitter className='icon'/> Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/yi%C4%9Fit-y%C4%B1lmaz-56786b2a1/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon'/>  LinkedIn</a></li>
          <li><a href="https://github.com/lutezzi" target="_blank" rel="noopener noreferrer"><FaGithub className='icon'/>  Github</a></li>
        </ul>
        <p>Designed with ⚡ by Lutezzi</p>
      </div>
    </footer>
  );
}

export default Footer;
