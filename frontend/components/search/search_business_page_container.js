import React from 'react';
import { connect } from 'react-redux';
import SearchBusinessPage from './search_business_page';
import { searchBusinesses } from '../../actions/search_actions';
import { selectSearchBusinesses } from '../../reducers/selectors';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';

const msp = (state,ownProps) => {

  let searchedBusIds = state.session.searchR;
  let businesses = Object.values(state.entities.businesses);
  return {
    currentUser: state.entities.users[state.session.id],
    searchedBusinesses: selectSearchBusinesses(businesses,searchedBusIds),
    businessCategories: Object.values(state.entities.businessCategories),
  };
};


const mdp = dispatch => {

  return {
    searchBusinesses: (searchData) => dispatch(searchBusinesses(searchData)),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())
  };
};


export default connect(msp,mdp)(SearchBusinessPage);
