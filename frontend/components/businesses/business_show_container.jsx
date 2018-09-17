import React from 'react';
import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestSingleBusiness } from '../../actions/businesses_actions';
import { deleteReview, updateReview } from '../../actions/reviews_actions';


const msp = (state,ownProps) => {
  const fetchedBusiness = state.entities.businesses[ownProps.match.params.businessId];
  let reviews = [];
  if (fetchedBusiness){
    reviews = fetchedBusiness.reviews;
  }

  return {
    business: fetchedBusiness,
    reviews: reviews
  };
};


const mdp = dispatch => {
  return {
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};


export default connect(msp,mdp)(BusinessShow);
