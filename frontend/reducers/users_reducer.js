import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ALL_USERS
} from "../actions/sessions_actions";
import { REMOVE_REVIEW } from "../actions/reviews_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  let newState;
  let userId;
  let reviewId;
  let businessId;
  let reviews;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      // returns from backend as snake case
      businessId = action.review.business_id;
      reviewId = action.review.id;
      userId = action.review.user_id;
      reviews = [];
      newState[userId].reviews.forEach(review => {
        if (review.id !== action.review.id) {
          reviews.push(review);
        }
      });
      newState[userId].reviews = reviews;
      return newState;
    default:
      return state;
  }
};
