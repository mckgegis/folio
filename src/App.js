import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './Components/Splash';
import Projects from './Components/Projects'
import Test from './Components/Test';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Test} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
