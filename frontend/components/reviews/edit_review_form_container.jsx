import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, fetchReview } from '../../actions/reviews_actions';


const msp = (state, ownProps) => {
  const blankReview = { title: '', body: '', id: ownProps.match.params.id};
  const review = state.entities.reviews[ownProps.match.params.id] || blankReview
  debugger
  const errors = state.errors.review;
  const formType = "Update Review";
  return { review, errors, formType };
};

const mdp = (dispatch) => {
  return {
    action: review => dispatch(updateReview(review)),
    fetchReview: id => dispatch(fetchReview(id))
  };
};

export default connect(msp, mdp)(ReviewForm);
