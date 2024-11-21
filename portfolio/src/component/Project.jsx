import React from "react";
import Typewriter from 'typewriter-effect';
import "../style/project.css";


function Project() {
    const projects = [
        {
            title: "Algorithm Visualizer",
            description: "A responsive alorithm visualizer that is interactive visual representations of algorithms and data structures to enhance learning and understanding.",
            demoLink: "https://algoviewcw.netlify.app/",
            githubLink: "https://github.com/NajimuddinS/NeuralNetNavigators"
        },
        {
            title: "Health and Wellnees",
            description: " The CareSync platform is a holistic and personalized solution that integrates fitness tracking, nutrition management, mental wellness tools, and tailored health recommendations..",
            demoLink: "visionary-crostata-0ee9ad.netlify.app/",
            githubLink: "github.com/kishan189/QuantumLeap_018"
        },
        {
            title: "Operating Systems",
            description: "Explore and compare the design and functionality of different operating systems.",
            demoLink: "https://osworld.netlify.app/",
            githubLink: "https://github.com/masai-course/kishan_singh_fw27_303"
        }
       
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container" >
            <Typewriter 
                    options={{
                    strings: ["Projects"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-text', // Add class for styling the text
                    cursorClassName: 'typewriter-cursor'   
                    }}
            />
                <div className="projects-grid" style={{marginTop:20}}>
                    {projects.map((project, index) => (
                        <div className="project" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Project