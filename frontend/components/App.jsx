import React from 'react';
import SignUpFormContainer from './session/sign_up_container';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>

    <Route exact path="/" component={SplashContainer}/>

    <AuthRoute exact path="/login" component={LoginFormContainer}/>
    <AuthRoute exact path="/signup" component={SignUpFormContainer}/>

    <footer className="footer">
        <ul className="about-list">
          About
          <li>
            <a href="https://github.com/jonathanahn95/BetterHelp/wiki">BetterHelp Wiki</a>
          </li>
        </ul>
        <img className="footerImg" src={window.footerCityscape}></img>
        <ul className="discover-list">
          Discover
          <a href="https://github.com/jonathanahn95">Learn about me</a>
        </ul>
    </footer>

  </div>
)

export default App;
