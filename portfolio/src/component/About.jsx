import React from "react";
import "../style/about.css";
import profile_pic from "../images/profile-pic-2.png";
import resume from "../images/KishanSingh-resume.pdf";
import Typewriter from 'typewriter-effect';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                    <Typewriter 
                            options={{
                            strings: ["About"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriter-textAbout', // Add class for styling the text
                            cursorClassName: 'typewriter-cursorAbout'
                           
                            }}
                        />
                        
                         <Typewriter 
                            options={{
                            strings: ["Hello! I'm a passionate front-end developer"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriter-textab', // Add class for styling the text
                            cursorClassName: 'typewriter-cursor'
                           
                            }}
                        />
                        <p>
                            focus on creating beautiful and user-friendly web applications.
                            I have experience in HTML, CSS, JavaScript, React, and more. 
                            I enjoy turning complex problems into simple, elegant solutions.
                        </p>
                        <p>
                            My goal is to constantly grow as a developer and work on projects
                            that challenge me to learn new technologies while providing value
                            to clients. Let's collaborate and build something amazing!
                        </p>
                        
                    </div>
                    <div className="about-image">
                        <img className="profilePic"
                            src={profile_pic}
                            alt="profile pic"
                        />
                    </div>
                </div>
                <div className="resumeBox">
                    <a href={resume} download>
                    <button className="resumeBtn">Download Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
