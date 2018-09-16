import { RECEIVE_SELECTED_BUSINESS_CATEGORIES  } from '../actions/business_category_actions';
import { RECEIVE_BUSINESS } from '../actions/businesses_actions';
import { RECEIVE_REVIEW } from '../actions/reviews_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_BUSINESS_CATEGORIES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return merge({}, state, { [action.business.id]: action.business });
    case RECEIVE_REVIEW:
      const newState = merge({}, state);
      // returns from backend as snake case
      const businessId = action.review.business_id;
      const reviewId = action.review.id;
      newState[businessId].reviews[reviewId] = action.review;
      return newState;
    default:
      return state;
  }
};
