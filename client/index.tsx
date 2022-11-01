import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
