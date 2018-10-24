import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses } from '../../actions/businesses_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';



const msp = (state,ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    businesses: Object.values(state.entities.businesses),
    businessCategories: Object.values(state.entities.businessCategories)
  };
};


const mdp = dispatch => {
  return {
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())
  };
};


export default connect(msp,mdp)(BusinessIndex);
