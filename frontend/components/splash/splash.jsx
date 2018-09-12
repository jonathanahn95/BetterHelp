import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    // debugger
    return  (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  }
  const personalGreeting = () =>  {
    // debugger
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Splash;
