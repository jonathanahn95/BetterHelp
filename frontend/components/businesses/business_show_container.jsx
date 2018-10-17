import React from 'react';
import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestSingleBusiness } from '../../actions/businesses_actions';
import { deleteReview, updateReview } from '../../actions/reviews_actions';
import { requestAllBusinessCategories } from '../../actions/business_category_actions';


const msp = (state,ownProps) => {
  const fetchedBusiness = state.entities.businesses[ownProps.match.params.businessId];
  let reviews = [];
  if (fetchedBusiness){
    reviews = fetchedBusiness.reviews;
  }

  return {
    business: fetchedBusiness,
    reviews: reviews,
    session: state.session.id,
    businessCategories: Object.values(state.entities.businessCategories)
  };
};


const mdp = dispatch => {
  return {
    requestSingleBusiness: (id) => dispatch(requestSingleBusiness(id)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    requestAllBusinessCategories: () => dispatch(requestAllBusinessCategories())

  };
};


export default connect(msp,mdp)(BusinessShow);
