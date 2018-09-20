import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { requestAllBusinesses } from '../../actions/businesses_actions';


const msp = (state,ownProps) => {
  return {
    businesses: Object.values(state.entities.businesses)
  };
};


const mdp = dispatch => {
  return {
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  };
};


export default connect(msp,mdp)(Search);
