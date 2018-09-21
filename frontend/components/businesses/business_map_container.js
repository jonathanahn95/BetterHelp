import React from 'react';
import { connect } from 'react-redux';
import BusinessMap from '../map/business_map';
import { requestAllBusinesses } from '../../actions/businesses_actions';


const msp = (state,ownProps) => {
  let businesses;
  if (state.entities.business){
    businesses = Object.values(state.entities.businesses);
  } else {
    businesses = [];
  }
  return {
    businesses: businesses,
  };
};


const mdp = dispatch => {
  return {
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  };
};


export default connect(msp,mdp)(BusinessMap);
