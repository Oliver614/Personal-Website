
import './App.css';
import React from 'react';
import EnterScreen from './EntryScreen/EnterScreen';
import backgroundImage from './File_000_New.jpg';
import MainScreen from './MainScreen/Main';
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


// <img src = {backgroundImage}/>
 

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
              </Switch>
            </AnimatePresence>
        
        )}/>
        </Router>
          
        </div>
      
    );
  }
}

export default App;
