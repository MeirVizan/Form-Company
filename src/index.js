import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StepContext from './StepContex';
ReactDOM.render(
  <StepContext>
  <React.StrictMode>
    <App />
  </React.StrictMode></StepContext>,
  document.getElementById('root')
);
