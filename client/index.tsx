import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import BackEndCheck from './component/BackEndCheck.js'

render(
  <BrowserRouter>
    <Navbar />
    <App />
    <BackEndCheck />
  </BrowserRouter>

  ,
  document.getElementById('root')
);
