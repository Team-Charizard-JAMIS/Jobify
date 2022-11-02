import React, {useState, MouseEvent} from 'react';
import MainContainer from './containers/MainContainer';
import About from './containers/About';
import Success from './containers/Success';
import Navbar from './Navbar';
import {
  Route,
  Routes,
} from 'react-router-dom'

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
        email: data.get('email'),
        password: data.get('password')
    }

    if (hasAccount){
      console.log('logging in')
      setLoggedIn(true)
    }
    else {
      console.log('this will register account')
    }
  };

      // function logMeIn(e: React.SyntheticEvent) {
    //     e.preventDefault();
    //     axios
    //       .post('/userAPI/login', {
    //         email,
    //         plainPassword: password,
    //       })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           setUser(res.data);
    //           navigate('/home');
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         if (err.response.status === 401) {
    //           setError(
    //             'Error: Invalid email address and/or password. Please try again.'
    //           );
    //         } else {
    //           setError(`status: ${err.response.status} , ${err.response.data}`);
    //         }
    //       });
    //   }

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
