import React from 'react';
import Splash from './Splash';
import Trello from './Trello';
import Therapuppy from './Therapuppy';
import Sheep from './Sheep';
import Education from './Education';
import Contact from './Contact';

const Test = () => {

    return (
      <div className="test-container">
        
        <div className="components-container">
            <Splash />
            <Trello />
            <Therapuppy />
            <Sheep />
            <Education />
        </div>
      </div>
    );
}



export default Test;