import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/reviews_actions';
import { requestSingleBusiness } from '../../actions/businesses_actions';
import { clearErrors } from '../../actions/sessions_actions';

const msp = (state ,ownProps) => {
  const errors = state.errors.review;
  const business_id = ownProps.match.params.businessId;
  const business = state.entities.businesses[ownProps.match.params.businessId] || {};
  const review = {
    rating: '',
    body: '',
    business_id: business_id,
  };
  const formType = 'Write a Review';
  return {
    errors,
    review,
    formType,
    business
  };
};

const mdp = dispatch =>{
  return {
    action: (review) => dispatch(createReview(review)),
    requestSingleBusiness: id => dispatch(requestSingleBusiness(id)),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(msp,mdp)(ReviewForm);
