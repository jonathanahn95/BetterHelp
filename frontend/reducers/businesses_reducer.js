import { RECEIVE_SELECTED_BUSINESS_CATEGORIES  } from '../actions/business_category_actions';


export default (state = {}, action) => {

  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_BUSINESS_CATEGORIES:
      // debugger
      return action.businesses;
    default:
      return state;
  }

};
