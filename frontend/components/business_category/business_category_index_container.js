import React from 'react';
import { connect } from 'react-redux';
import BusinessCategoryIndex from './business_category_index';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';
import { requestSelectedBusinessCategories } from '../../actions/businesses_actions';

const msp = state => {
  return {
    businessCategories: Object.values(state.entities.businessCategories),
  };
};


const mdp = dispatch => {
  return {
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories()),
    requestSelectedBusinessCategories: () => dispatch(requestSelectedBusinessCategories())
  };
};


export default connect(msp,mdp)(BusinessCategoryIndex);
