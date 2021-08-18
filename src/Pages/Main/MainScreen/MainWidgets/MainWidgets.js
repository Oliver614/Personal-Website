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
            className = "SearchResultsBig"
            whileHover = {{scale: 1.01}}>
                <h2>About</h2>
                <p>I do not know why i am writing this all i 
                    know is that i hope it manages to wrap itself before i loose my mind.</p>
                
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
            className = "SearchResultsSmall"
            whileHover = {{scale: 1.01}}>
                <h2 className = "title" >About</h2>
                <p>I do not know why i am writing this all i 
                    know is that i hope it manages to wrap itself before i loose my mind.
                    I do not know why i am writing this all i 
                    know is that i hope it manages to wrap itself before i loose my mind.
                    I do not know why i am writing this all i 
                    know is that i hope it manages to wrap itself before i loose my mind.</p>
                
            </motion.div>
        );

    }
}

export class SocialsWidget extends React.Component
{
    render()
    {
        return(
            <div className = "SearchResultsSocial">
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
                </div>
            </div>
        );
    }

}