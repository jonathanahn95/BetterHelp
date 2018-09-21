import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses } from '../../actions/businesses_actions';


const msp = (state,ownProps) => {

  return {
    businesses: Object.values(state.entities.businesses)
  };
};


const mdp = dispatch => {
  return {
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())
  };
};


export default connect(msp,mdp)(BusinessIndex);
