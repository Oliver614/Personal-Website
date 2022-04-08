import React from 'react';
import './EnterScreen.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';


class EnterScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
        this.props.hasEntered();
    }
    
    
    render()
    {
        return(
            
            <motion.div  
                        initial={{ y: 400, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {duration: 2} }}
                        exit={{ y: 0, opacity: 0, transition: {duration: 1.5}}}
                        
                        className='Enter'>
                <h1>Hi, I'm Oliver</h1>

                <div className='ButtonContainer'>


                    <Link to = "/About" >
                        <motion.button whileHover = {{scale: 1.1}} className = "AboutButton">About</motion.button>
                    </Link>
                    <Link to = "/MainScreen" >
                        <motion.button whileHover = {{scale: 1.1}} className = "ProjectsButton">Projects</motion.button>
                    </Link>
                    <Link to = "/MainScreen" >
                        <motion.button whileHover = {{scale: 1.1}} className = "ContactButton">Contact</motion.button>
                    </Link>
                </div>
                
                <div className = "socialContainer">

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
            </motion.div>
        );
    }
}

export default EnterScreen;
