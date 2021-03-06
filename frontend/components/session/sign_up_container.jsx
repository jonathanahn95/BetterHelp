import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors, login} from '../../actions/sessions_actions';
import SignUpForm from './sign_up_form';
import errorsReducer from '../../reducers/errors_reducer';
import { Link } from 'react-router-dom';


const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Signup',
    link: <Link to="/login">Login</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp,mapDispatchToProps)(SignUpForm);
