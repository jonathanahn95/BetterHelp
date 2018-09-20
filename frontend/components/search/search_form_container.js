import React from 'react';
import { connect } from 'react-redux';
import { searchBusinesses } from '../../actions/search_actions';
import { clearErrors } from '../../actions/sessions_actions';
import SearchForm from './search_form';
import errorsReducer from '../../reducers/errors_reducer';
import { Link } from 'react-router-dom';
import { selectSearchBusinesses } from '../../reducers/selectors';


const msp = (state, ownProps) => {

  let searchedBusIds = state.session.searchR;
  let businesses = Object.values(state.entities.businesses);
  return {
    searchedBusinesses: selectSearchBusinesses(businesses,searchedBusIds)
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
