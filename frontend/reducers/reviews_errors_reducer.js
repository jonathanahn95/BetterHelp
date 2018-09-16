import { RECEIVE_REVIEW_ERRORS, RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/reviews_actions';
import { CLEAR_ERRORS } from '../actions/sessions_actions';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      
      return action.errors;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
