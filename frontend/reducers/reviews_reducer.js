import {
  REMOVE_REVIEW,
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS
} from "../actions/reviews_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
