import React from 'react';
import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestSingleBusiness } from '../../actions/businesses_actions';


const msp = (state,ownProps) => {

  debugger
  return {
    business: state.entities.businesses[ownProps.match.params.businessId]
  };
};


const mdp = dispatch => {
  debugger
  return {
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id))
  };
};


export default connect(msp,mdp)(BusinessShow);
