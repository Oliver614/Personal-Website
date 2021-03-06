import React from 'react';
import './MainWidgets.css'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';



export class AboutBig extends React.Component
{
    
    render()
    {
        return(
            <motion.div 
            className = "BigContainer"
            whileHover = {{scale: 1.01}}>
                <h2>Show Case</h2>
                <p></p>
                
            </motion.div>
        );

    }
}

export class AboutSmall extends React.Component
{
    motion = <motion.div></motion.div>
    render()
    {
        return(
            <motion.div 
            className = "SmallContainer"
            whileHover = {{scale: 1.01}}>
                <h2 className = "title" >About</h2>
                <p></p>
                
            </motion.div>
        );

    }
}

export class Projects extends React.Component
{
    motion = <motion.div></motion.div>
    render()
    {
        return(
            <motion.div 
            className = "ProjectsWidget"
            whileHover = {{scale: 1.01}}>
                <h2 className = "title" >Projects</h2>
                <p></p>
                
            </motion.div>
        );

    }
}

export class SocialsWidget extends React.Component
{
    render()
    {
        return(
            <div className = "Social">
                <h2 className = "title">Social</h2>

                <div>
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
                </div>
            </div>
        );
    }

}

