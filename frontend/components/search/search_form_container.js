import React from 'react';
import { connect } from 'react-redux';
import { searchBusinesses, clearSearch } from '../../actions/search_actions';
import { clearErrors } from '../../actions/sessions_actions';
import SearchForm from './search_form';
import { logout } from  '../../actions/sessions_actions';
import errorsReducer from '../../reducers/errors_reducer';
import { Link } from 'react-router-dom';
import { selectSearchBusinesses } from '../../reducers/selectors';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';

const msp = (state, ownProps) => {
  let userProf = 'nav-sear-container-false';
  if (state.session.id){
    userProf = 'nav-sear-container-true';
  }

  let searchedBusIds = state.session.searchR;
  let businesses = Object.values(state.entities.businesses);
  return {
    currentUser: state.entities.users[state.session.id],
    userLoggedIn: userProf,
    businessCategories: Object.values(state.entities.businessCategories),
    searchedBusinesses: selectSearchBusinesses(businesses,searchedBusIds)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    logout: () => dispatch(logout()),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories()),
    searchBusinesses: (searchData) => dispatch(searchBusinesses(searchData)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp,mapDispatchToProps)(SearchForm);

// create selector and iterate ver search results and match the ones in business lsice of state
// state.session.search
