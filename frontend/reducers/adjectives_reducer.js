import { FETCH_ADJECTIVE } from "../actions/adjective_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_ADJECTIVE:
      return action.payload;
    default:
      return state;
  }
};
