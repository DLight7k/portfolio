import React from "react";
import Portrait from '../assets/Portrait.jpg'
import SproutGrow from '../assets/sprout&grow.jpg'
import WakeTechCampus from '../assets/waketech_campus.jpg'
import ResumeProject from '../assets/resume_assignment.png'
import ADT from '../assets/adt.png'
import Resume from '../assets/current_resume.pdf'
import { FaCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Main() {
    return (
        <>
            {/* About Me */}
            <section className="about" id="about">
                <div className="about-content">
                    <h3>Hello, I'm</h3>
                    <h1>Desmond Reese</h1>
                    <h3>And I'm a <span>Web Developer</span></h3>
                    <p>I'm currently a student at Wake Tech Community College studying for a Web Developer Associate. I've had a passion for learning about web development since I started a few months ago and have learned a lot. In my free time, I enjoy playing guitar and making music.</p>
                    <a href={Resume} rel="noreferrer" target="_blank" className="btn">My Resume</a>
                </div>

                <div className="about-img">
                    <img src={Portrait} alt="Senior Portrait of Desmond Reese"></img>
                </div>
            </section>

            {/* Projects */}
            <section className="projects" id="projects">
                <h2 className="heading">Latest <span>Projects</span></h2>
            
                <div className="projects-container">
                    <div className="projects-box">
                        <img src={SproutGrow} alt="Sprout & Grow Website"></img>
                        <div className="projects-layer">
                            <h4>Sprout & Grow</h4>
                            <p>Sprout & Grow was a website project I made for one of college courses. It is supposed to be for a greenhouse nursery in Raleigh, NC, specializing in high-quality organic plants.</p>
                            <a href="https://wcet.waketech.edu/dareese/WEB140/sprout&grow/index.html" rel="noreferrer"target="_blank"><FaArrowUpRightFromSquare className="projects-icon"/></a>
                        </div>
                    </div>
                    <div className="projects-box">
                        <img src={ResumeProject} alt="Resume Project Website"></img>
                        <div className="projects-layer">
                            <h4>Resume Assignment</h4>
                            <p>This assignment was also a website project for one of my courses. The purpose was to showcase what I have on my resume</p>
                            <a href="https://wcet.waketech.edu/dareese/WEB210/ResumeAssignment/index.html" rel="noreferrer" target="_blank"><FaArrowUpRightFromSquare className="projects-icon"/></a>
                        </div>
                    </div>
                    <div className="projects-box">
                        <img src={ADT} alt="ADT Power Washing Company Website"></img>
                        <div className="projects-layer">
                            <h4>ADT Power Washing</h4>
                            <p>This is a personal project for a side business I'm running with some others. The business is called ADT Power Washing Co.</p>
                            <a href="https://wcet.waketech.edu/dareese/ADT/home.html" rel="noreferrer" target="_blank"><FaArrowUpRightFromSquare className="projects-icon"/></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="skills" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>

                <div className="skills-container">
                    <div className="skills-box">
                        <FaCode className="skills-icon"/>
                        <h3>Web Development</h3>
                        <p>I've been learning web development for a while now and have gained experience using HTML, CSS, and JavaScript.I've also learned how to use WordPress to build some sites.</p>
                    </div>
                    <div className="skills-box">
                        <IoIosColorPalette className="skills-icon"/>
                        <h3>UX Design</h3>
                        <p>I've gained some skill in User Experience Design from work in my Wake Tech courses. Learning some of the concepts has helped to build more interactive sites that eliminate some common design issues.</p>
                    </div> 
                    <div className="skills-box">
                        <IoIosPhonePortrait className="skills-icon"/>
                        <h3>App Development</h3>
                        <p>Taking a Wake Tech course in Advanced Markup and Scripting has given me some knowledge and skill in the concepts of developing web applications. I've mostly used React to build more interactive applications.</p>
                    </div>  
                </div>
            
            </section>

            {/* Experience */}
            <section className="experience" id="experience">
                <div className="experience-img">
                    <img src={WakeTechCampus} alt="Wake Tech Community College Southern Campus"></img>
                </div>

                <div className="experience-content">
                    <h2 className="heading">My <span>Experience</span></h2>
                    <h3>Wake Tech</h3>
                    <p>Although I don't have any job experience related to web development, I have gained a lot experience from working on web applications for college projects and personal projects in my free time.</p>
                </div>
            </section>
        </>
    );
}   

export default Main;