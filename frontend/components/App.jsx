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
  </div>
)

export default App;
