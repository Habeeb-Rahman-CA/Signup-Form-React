import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import React, { useState, useEffect } from 'react';

function App() {
  //track the user is logged in and store user data
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    //check local storage to see if a user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
    }
  }, []);

  //handle the successful login
  const handleLoginSuccess = (name) =>{
    setIsLoggedIn(true)
    setUserName(name)
  }

  //When click the logout button the data stored in the local storage will be removed
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false)
    setUserName('')
    alert('You have been logged out');
  };

  return (
    <div className='card'>
      <h1>Registeration Form</h1>
      {!isLoggedIn ? ( //if the user not signed up or logged in 
        <>
          <Signup />
          <Login onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <>
          <h2>Welcome {userName} !!</h2>
          <p>You are successfully Logged in</p>
          <button className='logoutbtn' onClick={handleLogout}>Log Out</button>
        </>
      )}
    </div>
  )
}

export default App
