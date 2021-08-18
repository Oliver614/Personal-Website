import React from 'react';
import './Main.css';
import {motion} from 'framer-motion';
import {AboutBig, AboutSmall, SocialsWidget} from './MainWidgets/MainWidgets'


class MainScreen extends React.Component
{
    render()
    {
        return(
            <motion.div 
                initial = {{opacity: 0, y:700}}
                animate = {{opacity: 1, y: 0, transition: {duration: 1}}}
                >
                    <h1 className = "name"> Oliver Hodgson </h1>
                    <div className = "container">
                        <AboutBig/>
                        <div className = "smallContainer">
                            <SocialsWidget/>
                            <AboutSmall/>
                            <AboutSmall/>
                        </div>
                    </div>
                    
                </motion.div>
        );
    }
}

export default MainScreen;