
import './App.css';
import React from 'react';
import EnterScreen from './EntryScreen/EnterScreen';
import backgroundImage from '../Images/File_000_New.jpg';
import MainScreen from './MainScreen/Main';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { ShowCase } from '../ShowCase/ShowCase';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      hasEntered: false
    }
  }
  
  render()
  {
    return (
      
        <div className="App">
          <img src = {backgroundImage} alt = "Landscape"/>
        <Router>
        <Route
          render = {({location}) => ( 
            <AnimatePresence initial = {false} exitBeforeEnter>
              <Switch location = {location} key = {location.pathname}>
                <Route exact path="/" component={EnterScreen} />
                <Route path="/MainScreen" component={MainScreen} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/ShowCase" component={ShowCase} />
              </Switch>
            </AnimatePresence>
        
        )}/>
        </Router>
          
        </div>
      
    );
  }
}

export default App;
