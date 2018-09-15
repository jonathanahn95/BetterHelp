import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/reviews_actions';
import { requestSingleBusiness } from '../../actions/businesses_actions';

const msp = (state ,ownProps) => {
  debugger
  const errors = state.errors.review;
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses;
  const review = {
    rating: '',
    body: '',
    businessId: businessId,
  };
  const formType = 'Write a Review';
  return {
    errors,
    review,
    formType
  };
};

const mdp = dispatch =>{
  return {
    action: (id) => dispatch(createReview(id)),
    requestSingleBusiness: id => dispatch(requestSingleBusiness(id))
  };
};

export default connect(msp,mdp)(ReviewForm);
