import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';
import {CLEAR_SEARCH} from '../actions/search_actions';

export default (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case CLEAR_SEARCH:
      return [];
    default:
      return state;
  }
};
