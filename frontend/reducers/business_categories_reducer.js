import { RECEIVE_ALL_BUSINESS_CATEGORIES, RECEIVE_SELECTED_BUSINESS_CATEGORIES  } from '../actions/business_category_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESS_CATEGORIES:
      return action.businessCategories;

    default:
      return state;
  }

};
