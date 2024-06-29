import React, { useState, useEffect } from 'react';
import '../css/Login.css';
import Contact from './Contact';
import Menu from './Menu'; // Import your Menu component
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to check if user is logged in from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    // Replace with actual API call to validate username and password
    try {
      // Simulated API call to validate login (replace with actual fetch call)
      const response = await fetch('http://localhost:3000/register');
      const data = await response.json();
      // Implement logic to check username and password here
      const validUser = data.find(user => user.username === event.target.username.value && user.password === event.target.password.value);
      if (validUser) {
        setUsername(validUser.username);
        setLoggedIn(true);
        onLogin(validUser.username); // Notify parent component of login
        localStorage.setItem('username', validUser.username); // Store username in localStorage
        // Additional logic for storing login state, e.g., local storage
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again later.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
    localStorage.removeItem('username'); // Remove username from localStorage on logout
    // Additional logic for clearing login state, e.g., local storage
  };

  const redirectToHome = () => {
    // Replace with the route you want to redirect to after login
    // For example, if you want to redirect to the home page:
    window.location.href = '/';
  };

  return (
    <div>
      <hr />
      <div className='dlg'>
      {!loggedIn ? (
        <div className="container">
          <div className="forms-container">
            <div className="form-control signin-form">
              <form onSubmit={handleLogin}>
                <h2>Signin</h2>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Signin</button>
              </form>
              <span>or signin with</span>
              <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="intros-container">
            <div className="intro-control signin-intro">
              <div className="intro-control__inner">
                <h2>Welcome back!</h2>
                <p>
                  Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.
                </p>
                <button id="signup-btn">
                  <NavLink exact to="/register" activeClassName="" className="link">No account yet? Signup.</NavLink>
                </button>
              </div>
            </div>
            <div className="intro-control signup-intro">
              <div className="intro-control__inner">
                <h2>Come join us!</h2>
                <p>
                  We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
                </p>
                <button id="signin-btn" onClick={redirectToHome}>
                  Already have an account? Signin.
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Render logged-in user menu */}
          <Menu username={username} onLogout={handleLogout} />
          {/* Automatically redirect to home page */}
          {window.location.href = '/'}
        </div>
      )}

    </div>
    <Contact />
    </div>
  );
}

export default Login;
