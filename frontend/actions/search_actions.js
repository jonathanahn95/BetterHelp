import * as SearchApiUtil from '../util/search_api_util';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_DROPDOWN_BUSINESSES = 'RECEIVE_DROPDOWN_BUSINESSES';


const receiveSearchResults = results => {

  return {
    type: RECEIVE_SEARCH_RESULTS,
    results,
  };
};

export const receiveDropdownBusinesses = businesses => {
  return {
    type: RECEIVE_DROPDOWN_BUSINESSES,
    businesses
  };
};


export const requestDropdownBusinesses = searchData => dispatch => {
  return SearchApiUtil.searchBusinesses(searchData).then( results => {
    return dispatch(receiveDropdownBusinesses(results));
  });
};
export const searchBusinesses = searchData => dispatch => {
  return SearchApiUtil.searchBusinesses(searchData).then( results => {
    return dispatch(receiveSearchResults(results));
  });
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
