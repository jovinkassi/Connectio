  // src/components/Login.jsx
import React, { useState } from 'react';
import { db } from '../firebase'; // Import firestore from firebase.js
import "./Login.css";
import Dashboard from './Dashboard';
import ServiceForm from './ServiceForm';
import { useNavigate } from 'react-router-dom'; 
//import { Redirect } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = db.collection('users').doc(username);
      const doc = await userRef.get();

      if (doc.exists) {
        // Existing user, check password
        const userData = doc.data();
        if (userData.password === password) {
          console.log('Login successful!');
          //setLoggedIn(true);
          //const shouldRedirect = true;
          //loggedIn ? <Navigate to="/dash" /> : <div>My Component</div>;

        // history.push('/dash');
        history('/dash');
        } else {
          setError('Incorrect password!');
        }
      } else {
        // New user, create the users collection and store login details
        await userRef.set({ password });
        console.log('New user registered!');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // If user is logged in, render Dashboard component
 /* if (loggedIn) {
    return <Dashboard />;
  }*/

  return (
    
    <div class='content-container2'>
      
      <form onSubmit={handleSubmit}>
        <div className='combined-box'>
        <h2>Login</h2>
        <div className='user-name'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='password'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
        </div>
      </form>
      
    </div>
   
  );
}

export default Login;
