import React from "react";
import { connect } from "react-redux";
import BusinessShow from "./business_show";
import { requestSingleBusiness } from "../../actions/businesses_actions";
import { deleteReview, updateReview } from "../../actions/reviews_actions";
import { requestAllBusinessCategories } from "../../actions/business_category_actions";
import { fetchAllUsers } from "../../actions/sessions_actions";

const msp = (state, ownProps) => {
  const fetchedBusiness =
    state.entities.businesses[ownProps.match.params.businessId];
  let reviews = [];
  if (fetchedBusiness) {
    reviews = fetchedBusiness.reviews;
  }
  return {
    users: state.entities.users,
    business: fetchedBusiness,
    reviews: reviews,
    currentUser: state.entities.users[state.session.id],
    session: state.session.id,
    businessCategories: Object.values(state.entities.businessCategories)
  };
};

const mdp = dispatch => {
  return {
    requestSingleBusiness: id => dispatch(requestSingleBusiness(id)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: id => dispatch(deleteReview(id)),
    requestAllBusinessCategories: () =>
      dispatch(requestAllBusinessCategories()),
    fetchAllUsers: userId => dispatch(fetchAllUsers(userId))
  };
};

export default connect(
  msp,
  mdp
)(BusinessShow);
