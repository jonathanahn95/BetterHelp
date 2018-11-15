import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_COOL,
  UPDATE_COOL,
  RECEIVE_FUNNY,
  UPDATE_FUNNY,
  RECEIVE_USEFUL,
  UPDATE_USEFUL
} from "../actions/adjective_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  let newState;
  let reviewId;
  let reviews;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, action.payload.adjectives);
    case REMOVE_LIKE:
      newState = merge({}, state);
      reviewId = Object.keys(action.payload.adjectives.likes);
      delete newState.likes[reviewId];
      return newState;
    case RECEIVE_COOL:
      return merge({}, state, action.payload.adjectives);
    case UPDATE_COOL:
      newState = merge({}, state);
      reviewId = Object.keys(action.payload.adjectives.cool);
      delete newState.cool[reviewId];
      return merge({}, newState, action.payload.adjectives);
    case RECEIVE_FUNNY:
      return merge({}, state, action.payload.adjectives);
    case UPDATE_FUNNY:
      newState = merge({}, state);
      reviewId = Object.keys(action.payload.adjectives.funny);
      debugger;
      delete newState.funny[reviewId];
      return merge({}, newState, action.payload.adjectives);
    case RECEIVE_USEFUL:
      return merge({}, state, action.payload.adjectives);
    case UPDATE_USEFUL:
      newState = merge({}, state);
      reviewId = Object.keys(action.payload.adjectives.useful);
      delete newState.useful[reviewId];
      return merge({}, newState, action.payload.adjectives);
    default:
      return state;
  }
};
