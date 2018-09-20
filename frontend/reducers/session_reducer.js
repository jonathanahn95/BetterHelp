import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { selectSearchedBusinessIds } from './selectors.js';
import { merge } from 'lodash';

const defaultState = {
  id: null,
  searcR: []
};

const sessionReducer = (state = defaultState, action) => {
  debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:{
      return {
        id: action.user.id,
        searchR: []
      };
    }
    case LOGOUT_CURRENT_USER:{
      return defaultState;
    }
    case RECEIVE_SEARCH_RESULTS:
      return {
        id: state.id,
        searchR: Object.keys(action.results)
      };
    default:{
      return state;
    }
  }
};


export default sessionReducer;
