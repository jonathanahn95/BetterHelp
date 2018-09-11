import { combineReducers } from 'redux';
import session from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

export const rootReducer = combineReducers({
  session,
  errors: errorsReducer,
  entities: entitiesReducer
});
