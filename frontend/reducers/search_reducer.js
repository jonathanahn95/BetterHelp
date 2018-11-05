import { RECEIVE_SEARCH_RESULTS, RECEIVE_DROPDOWN_BUSINESSES } from '../actions/search_actions';
import { merge } from 'lodash';
import {CLEAR_SEARCH} from '../actions/search_actions';

export default (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case CLEAR_SEARCH:
      return [];
    case RECEIVE_DROPDOWN_BUSINESSES:
    return action.businesses;
    default:
      return state;
  }
};
