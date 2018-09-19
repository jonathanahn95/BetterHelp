import React from 'react';
import { connect } from 'react-redux';
import { searchBusinesses } from '../../actions/search_actions';
import { clearErrors } from '../../actions/sessions_actions';
import SearchForm from './search_form';
import errorsReducer from '../../reducers/errors_reducer';
import { Link } from 'react-router-dom';


const msp = (state, ownProps) => {
  debugger
  return {
    businesses: state.entities.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchBusinesses: (searchData) => dispatch(searchBusinesses(searchData)),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(msp,mapDispatchToProps)(SearchForm);

// create selector and iterate ver search results and match the ones in business lsice of state
// state.session.search
