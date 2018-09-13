import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/sessions_actions';
import LoginForm from './login_form';
import errorsReducer from '../../reducers/errors_reducer';
import { Link } from 'react-router-dom';


const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Login',
    link: <Link to="/signup">Sign Up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(msp,mapDispatchToProps)(LoginForm);
