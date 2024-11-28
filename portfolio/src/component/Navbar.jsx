import React, { useState } from "react";
import "../style/navbar.css"; // Link to the CSS file
import resume from "../images/KishanSingh-resume.pdf";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

   const [activeHome,setActiveHome]=useState(true)
   function handelHome(){
    setActiveHome(true)
   }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(isOpen)

    return (
        <nav className="nav">
            <ul className="nav-brand">
                <li><i style={{fontSize:26,marginRight:10}} className="fa-duotone fa-solid fa-briefcase"></i><span style={{fontSize:26}}>Portfolio</span></li>
            </ul>
            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li >
                        <a href="" className="link" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className="link" onClick={() => setIsOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className="link" onClick={() => setIsOpen(false)}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="link" onClick={() => setIsOpen(false)}>Project</a>
                    </li>
                    
                    <li>
                        <a href="#contact" className="link" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                    <li>
                        <a href={resume} className="link" onClick={() => setIsOpen(false)}>Resume</a>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
