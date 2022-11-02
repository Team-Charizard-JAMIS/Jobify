import React, {useState, MouseEvent} from 'react';
import MainContainer from './containers/MainContainer';
import About from './containers/About';
import Success from './containers/Success';
import Navbar from './Navbar';
import {
  Route,
  Routes,
} from 'react-router-dom';
import axios from 'axios';

const App: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [hasAccount, setHasAccount] = useState(true)

  const handleLogOut = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('logging out')
    setLoggedIn(false)
  }

  //TODO: lots of rework needed. need a whole path for 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const creds = {
        username: data.get('username'),
        password: data.get('password')
    }

    if (hasAccount){
      console.log('logging in')
      // axios
      // //TODO change to real route
      // .post('/userAPI/login', creds)
      // .then((res) => {
      //   if (res.status === 200) {
      //     //TODO needs something to set info
      //     setLoggedIn(true)
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   if (err.response.status === 401) {
      //     alert(
      //       'Error: Invalid email address and/or password. Please try again.'
      //     );
      //   } else {
      //     alert(`status: ${err.response.status} , ${err.response.data}`);
      //   }
      // });      
      setLoggedIn(true)
    }
    else {
      console.log('this will register account')
      // axios
      //   .post('/api/users', creds)
      //     .then((res) => {
      //       if(res.status === 201){
      //         setLoggedIn(true)
      //       }
      //     })
    }
  };


  return (
    <div>
      <Navbar handleLogOut={handleLogOut}/>
      <Routes>
        <Route path='/about' element={< About />} />
        <Route path='/' element={
          <MainContainer 
            handleSubmit={handleSubmit} 
            loggedIn={loggedIn} 
            setHasAccount={setHasAccount} 
            hasAccount={hasAccount}
          />} 
        />
        <Route path='/success' element={< Success />} />
        {/* <Route path='/login' element={< LogIn />} /> */}
      </Routes>
    </div>
  );
};

export default App;
