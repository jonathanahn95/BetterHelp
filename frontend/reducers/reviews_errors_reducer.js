import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_REVIEW
} from "../actions/reviews_actions";
import { CLEAR_ERRORS } from "../actions/sessions_actions";

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default reviewErrorsReducer;
