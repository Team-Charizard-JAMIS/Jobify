import React from 'react';
import MainContainer from './containers/MainContainer';
import About from './containers/About';
import Success from './containers/Success';
import LogIn from './containers/LogIn';
import Navbar from './Navbar';
import {
  Route,
  Routes,
} from 'react-router-dom'

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/about' element={< About />} />
        <Route path='/' element={< MainContainer />} />
        <Route path='/success' element={< Success />} />
        <Route path='/login' element={< LogIn />}/>
      </Routes>
    </div>
  );
};

export default App;
