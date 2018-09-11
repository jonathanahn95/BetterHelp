import React from 'react';
import signUpContainer from './session/sign_up_container';
import loginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      BetterHelp
    </header>
    <AuthRoute path="/login" component={loginFormContainer}/>
    <AuthRoute path="/signup" component={signUpContainer}/>
  </div>
)

export default App;
