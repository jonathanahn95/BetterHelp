import React from 'react';
import { connect } from 'react-redux';
import SearchBusinessPage from './search_business_page';
import { searchBusinesses } from '../../actions/search_actions';
import { selectSearchBusinesses } from '../../reducers/selectors';

const msp = (state,ownProps) => {
  
  let searchedBusIds = state.session.searchR;
  let businesses = Object.values(state.entities.businesses);
  return {
    searchedBusinesses: selectSearchBusinesses(businesses,searchedBusIds)
  };
};


const mdp = dispatch => {

  return {
    searchBusinesses: (searchData) => dispatch(searchBusinesses(searchData))
  };
};


export default connect(msp,mdp)(SearchBusinessPage);
