import { RECEIVE_SELECTED_BUSINESS_CATEGORIES  } from '../actions/business_category_actions';
import { RECEIVE_BUSINESS } from '../actions/businesses_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_BUSINESS_CATEGORIES:
      // debugger
      return action.businesses;
    case RECEIVE_BUSINESS:
    debugger
    return merge({}, state, { [action.business.id]: action.business });
    default:
      return state;
  }

};
