import { combineReducers} from 'redux';
import LoginErrorsReducer from './login_errors_reducer';
import SignUpErrorsReducer from './signup_errors_reducer';
import session from './session_errors_reducer';

const errorsReducer = combineReducers({
  session
});


export default errorsReducer;


// loginErrors: LoginErrorsReducer,
// signupErrors: SignUpErrorsReducer
