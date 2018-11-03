import * as SearchApiUtil from '../util/search_api_util';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


const receiveSearchResults = results => {

  return {
    type: RECEIVE_SEARCH_RESULTS,
    results,
  };
};

export const searchBusinesses = searchData => dispatch => {
   // debugger
  return SearchApiUtil.searchBusinesses(searchData).then( results => {
    // debugger
    return dispatch(receiveSearchResults(results));
  });
};

export const clearSearch = () => {

  return {
    type: CLEAR_SEARCH,
  };
};
