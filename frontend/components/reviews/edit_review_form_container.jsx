import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchReview } from '../../actions/reviews_actions';
import { clearErrors } from '../../actions/sessions_actions';
import { requestSingleBusiness } from '../../actions/businesses_actions';


const msp = (state, ownProps) => {
  // only way to get to this props should be thorugh the business show page

  const businessId = ownProps.match.params.businessId;
  const reviewId = ownProps.match.params.id;
  const business = state.entities.businesses[ownProps.match.params.businessId] || {};
  // const review = (state.entities.businesses[businessId] && state.entities.businesses[businessId].reviews[reviewId]) || {};
  const review = state.entities.businesses[businessId].reviews.find(rev => rev.id === parseInt(reviewId));

  const errors = state.errors.review;
  const formType = "Update Review";
  return { review, errors, formType, business };
};

const mdp = (dispatch) => {
  return {
    action: review => dispatch(updateReview(review)),
    fetchReview: id => dispatch(fetchReview(id)),
    clearErrors: () => dispatch(clearErrors()),
    requestSingleBusiness: id => dispatch(requestSingleBusiness(id)),

  };
};

export default connect(msp, mdp)(ReviewForm);
