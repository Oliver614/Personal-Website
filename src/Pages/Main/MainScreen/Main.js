import React from 'react';
import './Main.css';
import {motion} from 'framer-motion';
import {AboutBig, AboutSmall, SocialsWidget, Projects} from './MainWidgets/MainWidgets'
import intials from "../../Images/initials.png"
import {Link} from 'react-router-dom';



class MainScreen extends React.Component
{
    render()
    {
        return(
            <motion.div 
                initial = {{opacity: 0, y:700}}
                animate = {{opacity: 1, y: 0, transition: {duration: 1}}}
                exit = {{opacity: 0, transition: {duration: 0.3}}}
                >   
                    <motion.div 
                        className = "Header"
                        initial = {{opacity: 0, x:-300}}
                        animate = {{opacity: 1, x: 0, transition: {delay: 0.5, duration: 1}}}
                        >

                        <img className = "Initials" src = {intials}/>
                    </motion.div>
                    <div className = "container">
                        
                        <Link className = "Link-No-Decs" to = "/ShowCase">
                            <AboutBig/>
                        </Link>
                        
                        <div className = "smallContainer">
                            <div className = "aboutnSocialContainer">
                                <Link className = "Link-No-Decs" to = "/About">
                                    <AboutSmall/>
                                </Link>  
                            </div>
                            
                            <Link className = "Link-No-Decs" to = "/Projects">
                                <Projects/>
                            </Link>
                            
                            <SocialsWidget/>
                            
 
                        </div>
                    </div>
                    
                </motion.div>
        );
    }
}

export default MainScreen;