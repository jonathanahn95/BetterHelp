import React from 'react';
import { connect } from 'react-redux';
import Businesses from './businesses';
import { requestSelectedBusinessCategories } from '../../actions/businesses_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';


const msp = (state,ownProps) => {
  return {
    businesses: Object.values(state.entities.businesses),
    category: ownProps.match.params.id,
    businessCategories: Object.values(state.entities.businessCategories)

  };
};


const mdp = dispatch => {
  return {
    requestSelectedBusinessCategories: (businessCategory) => dispatch(requestSelectedBusinessCategories(businessCategory)),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())

  };
};


export default connect(msp,mdp)(Businesses);
