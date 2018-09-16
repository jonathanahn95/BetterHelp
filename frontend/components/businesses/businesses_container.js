import React from 'react';
import { connect } from 'react-redux';
import Businesses from './businesses';
import { requestSelectedBusinessCategories } from '../../actions/businesses_actions';


const msp = (state,ownProps) => {

  return {
    businesses: Object.values(state.entities.businesses),
    category: ownProps.match.params.id
  };
};


const mdp = dispatch => {
  return {
    requestSelectedBusinessCategories: (businessCategory) => dispatch(requestSelectedBusinessCategories(businessCategory))
  };
};


export default connect(msp,mdp)(Businesses);
