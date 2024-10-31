import React from "react";
import "../style/skill.css";
import Typewriter from 'typewriter-effect';

function Skills() {
    return (
       <>
        <div className="skillsWriterBox">
        <Typewriter 
                    options={{
                    strings: ["Skills"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-textSkill', // Add class for styling the text
                    cursorClassName: 'typewriter-cursorSkill'   
                    }}
            />
        </div>

        <section id="skills" className="skills-section">
       
            <div className="containerSkill">
                <div className="skills-grid">
                    <div className="skill">
                       <img style={{width:120}} src={"https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"} />
                        <p>HTML5</p>
                    </div>
                   
                    <div className="skill">
                        <img style={{width:120}} src={"https://img.icons8.com/fluent/200/css3.png"}/>
                        <p>CSS3</p>
                    </div>
                    <div className="skill">
                        <img style={{width:120}} src={"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"}/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill">
                        <img style={{width:120}}  src={"https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"}/>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <img style={{width:120}} src={"https://static-00.iconduck.com/assets.00/github-repo-git-octocat-icon-512x499-kv3d6dci.png"}/>
                        <p>Git</p>
                    </div>
                    <div className="skill">
                        <img style={{width:120}} src={"https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"} />
                        <p>Firebase</p>
                    </div>
                    <div className="skill">
                        <img style={{width:120}} src={"https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"}/>
                        <p>MySql</p>
                    </div>
                    <div className="skill">
                       <img style={{width:120}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ioJg0bR0MYN02ArSSCwGGyd11ei5insIqg&s"}/>
                        <p>MongodDB</p>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}

export default Skills;
