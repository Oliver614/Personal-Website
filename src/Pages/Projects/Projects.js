import React from 'react';
import './Projects.css'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import intials from "../Images/initials.png" 

export class Projects extends React.Component
{
    


    render()
    {
        return(
            <div>

                <motion.div
                    initial = {{x: -300, opacity: 0}} 
                    animate = {{x: 0, opacity: 1, transition: {delay: 1.2, duration: 1}}} 
                    className = "ProjectsHeader">
                    <img className = "Initials" src = {intials}/>
                </motion.div>

                <motion.div
                    initial = {{width: '40vw', height: '49vh', x: '20vw', y: '2vh'}}
                    animate = {{x: '0vw', y: '0vw', transition: {delay: 0.5, duration: 0.9}, width: '85vw', height: '80vh'}}  
                    className = "ProjectsContainer">

                    <h2 className = "title" >Projects</h2>

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
                </motion.div>
            </div>
        );
    }
}