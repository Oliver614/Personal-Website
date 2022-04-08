import React from 'react';
import './Projects.css'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

export class Projects extends React.Component
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
                    className = "ProjectsContainer">
                    <h2 className = "title" >Projects</h2>
                    <text>
                        Insert Text Here.
                    </text>
                        <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1, transition: {delay: 1.2}}}  
                            className = "ProjectsSocialIcons">

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