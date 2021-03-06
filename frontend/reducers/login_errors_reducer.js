import { CLEAR_ERRORS, RECEIVE_LOGIN_ERRORS, RECEIVE_CURRENT_USER } from '../actions/sessions_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_LOGIN_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
