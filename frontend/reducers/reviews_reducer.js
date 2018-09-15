import { REMOVE_REVIEW, RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS } from '../actions/reviews_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};
