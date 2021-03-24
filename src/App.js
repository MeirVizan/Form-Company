import React, {useState, useContext,useEffect} from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import {Stepper, StepLabel, Step} from '@material-ui/core';

import {multiStepContext} from './StepContex';

// Language json file
const lang = require('./lang.json')


global.langData = lang;
global.lang = 'en';

function App() {


  const {currentStep, success} = useContext(multiStepContext)
  const [langChange, setLangChange] = useState('en')


  function showStep(step){
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }


  return (
    <div className={`App ${success ? "success" : ""}`}>
    {/* select of languages for user */}
      <div className='select-lng'>
        <select onChange={(e)=> {
          console.log(e.target.value);
          global.lang = e.target.value
          setLangChange(e.target.value)
          }}>
          <option value='en'>en</option>
          <option value='fr'>fr</option>
        </select>
        </div>
      <header className="App-header">
       
        <div>
        
        <h2>{global.langData[global.lang].title}</h2>
        <div className='wapper2'>
        <div className='center-step'>
          <Stepper  style={{width: "30%"}} activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        </div>
        { showStep(currentStep)}
        </div>
      </header>
      {success && 
        <div className="popup">
       
        <div className="box">
          <h2>Thank you!</h2>
          <p>Your Submiting has been successfully sent.</p>
          
          <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"/>
        </div>
      </div>}
    </div>
  );
}

export default App;
