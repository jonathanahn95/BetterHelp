import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import businessCategoriesReducer from './business_categories_reducer';
import businessesReducer from './businesses_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  businessCategories: businessCategoriesReducer,
  businesses: businessesReducer
});

export default entitiesReducer;
