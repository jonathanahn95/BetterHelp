import React from 'react';
import signUpContainer from './session/sign_up_container';
import SplashContainer from './splash/splash_container';
import loginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>

    <Route exact path="/" component={SplashContainer}/>

    <AuthRoute exact path="/login" component={loginFormContainer}/>
    <AuthRoute exact path="/signup" component={signUpContainer}/>
  </div>
)

export default App;
