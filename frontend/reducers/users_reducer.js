import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
