import React from "react";
import "../style/home.css";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Typewriter from 'typewriter-effect';

function Home(){

    return(
       <>
        <div className="home" id="home">
     
     <section id="home" className="home-section">
     <div className="welcome-section">
         <Typewriter 
                options={{
                strings: ["Welcome to My Portfolio"],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-textWelcom', // Add class for styling the text
                cursorClassName: 'typewriter-cursorWelcom'
                           
            }}
        />
        
      
     </div>
     
    </section>  
    </div>
        <About/>
         <Skills/>
         <Project/>
         <Contact/>   
       </>
    )
}

export default Home