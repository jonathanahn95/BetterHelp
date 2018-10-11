import React from 'react';
import { connect } from 'react-redux';
import { selectSearchBusinesses } from '../../reducers/selectors';
import { searchBusinesses, clearSearch } from '../../actions/search_actions';
import SearchDropDown from './search_drop_down';


const msp = (state,ownProps) => {
      
  let searchedBusIds = state.session.searchR;
  let businesses = Object.values(state.entities.businesses);
  return {
    searchedBusinesses: selectSearchBusinesses(businesses,searchedBusIds)
  };
};


const mdp = dispatch => {

  return {
    clearSearch: () => dispatch(clearSearch()),
    searchBusinesses: (searchData) => dispatch(searchBusinesses(searchData))
  };
};


// export default connect(msp,mdp)(SearchDropDown);
