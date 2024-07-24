import React from "react";
import { Link } from "react-scroll";

function Header() {
    return (
        <header>
            <nav>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;