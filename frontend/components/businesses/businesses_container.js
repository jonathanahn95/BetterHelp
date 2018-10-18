import React from 'react';
import { connect } from 'react-redux';
import Businesses from './businesses';
import { requestSelectedBusinessCategories } from '../../actions/businesses_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';


const msp = (state,ownProps) => {

  let businessCategoryName;
  if (state.entities.businessCategories){
    Object.values(state.entities.businessCategories).forEach( category => {
      if (category.id.toString() === ownProps.match.params.id){
        businessCategoryName = category.category;
      }
    });
  }
  
  return {
    businesses: Object.values(state.entities.businesses),
    category: ownProps.match.params.id,
    businessCategories: Object.values(state.entities.businessCategories),
    businessCategoryName
  };
};


const mdp = dispatch => {
  return {
    requestSelectedBusinessCategories: (businessCategory) => dispatch(requestSelectedBusinessCategories(businessCategory)),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())

  };
};


export default connect(msp,mdp)(Businesses);
