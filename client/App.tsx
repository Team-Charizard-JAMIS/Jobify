import React from 'react';
import MainContainer from './containers/MainContainer';
import About from './containers/About';
import Success from './containers/Success';
import {
  Route,
  Routes,
} from 'react-router-dom'

function App() {


  return (
    <div>
< MainContainer />
      <Routes>
        <Route path='/about' element={< About />} />
        <Route path='/' element={< MainContainer />} />
        <Route path='/success' element={< Success />} />

      </Routes>
    </div>
  );
};

export default App;
