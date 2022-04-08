import React from 'react';
import './About.css'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';



export class About extends React.Component
{

    render()
    {
        return(
            <div>
                <Link to = "/" >
                <motion.button className='GoToEntryScreen' whileHover = {{scale: 1.05}}>Oliver Hodgson</motion.button>
                </Link>
                <Link to = "/About" >
                <motion.button className='GoToAboutScreen' whileHover = {{scale: 1.05}}>About</motion.button>
                </Link>
                <Link to = "/Projects" >
                <motion.button className='GoToProjectsScreen' whileHover = {{scale: 1.05}}>Projects</motion.button>
                </Link>
                <Link to = "/" >
                <motion.button className='GoToContactScreen' whileHover = {{scale: 1.05}}>Contact</motion.button>
                </Link>

                <div 
                    //initial = {{width: '40vw', height: '14vh', x: '20vw', y: '-32vh'}}
                    //animate = {{x: '0vw', y: '0vw', transition: {delay: 0.5, duration: 0.9}, width: '85vw', height: '80vh'}} 
                    //className = "AboutContainer"
                    className = "AboutContainer">
                


                    <h2 className = "title" >About</h2>
                    <div className='MyText'>
                    <text >
                        Working as an engineer for the past 8 years in a wide range of sectors, <br></br>
                        I found my passion in software development and computer science. <br></br><br></br>

                        This passion has lead me to deciding to change my career, and in 2021 I began my degree in Computer Science with the University of London.<br></br> 
                        <br></br>
                        Over the past few years I have become familiar working with languages such as: <br></br>
                            - C++ <br></br>
                            - Python <br></br>
                            - Lisp <br></br>
                            - JavaScript <br></br>
                        <br></br>
                        Learning new API's like React (to make this website), <br></br>
                        DirectX 12 and Direct ML to make a small raytracing engine for comparing different raytracing techniques and AI upscalling (WIP), <br></br>
                        Juce framework for making audio plugins asim also an avid bedroom producer. Creating an FDN reverb plugin which you can find 
                        <a href="https://github.com/Oliver614/Eko" target="_blank" rel="noreferrer">  Here.</a><br/>
                        And finally PlatormIO for developing on the ESP32 the platform that gor me started with C++.
                    </text>
                    </div>
                        <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1, transition: {delay: 1.2}}} 
                            className = "AboutSocialIcons">
                            
                            <motion.button className = "socialButton" whileHover = {{scale: 1.05}} >
                                <SocialIcon className = "socialIcon" url="https://linkedin.com" target="_blank"/>
                            </motion.button>
                            <motion.button className = "socialButton" whileHover = {{scale: 1.05}} >
                                <SocialIcon className = "socialIcon" url="https://facebook.com" target="_blank"/>
                            </motion.button>

                            <motion.button className = "socialButton" whileHover = {{scale: 1.05}} >
                                <SocialIcon className = "socialIcon" url="https://github.com" target="_blank"/>
                            </motion.button>

                            <motion.button className = "socialButton" whileHover = {{scale: 1.05}} >
                                <SocialIcon className = "socialIcon" url="https://instagram.com" target="_blank"/>
                            </motion.button>
                        </motion.div>
                </div>
                
            </div>
        );
    }
}
