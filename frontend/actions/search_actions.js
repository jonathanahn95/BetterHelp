import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results,
  };
};

export const searchBusinesses = searchData => {
  return SearchApiUtil.searchBusinesses(searchData).then( results => {
    return dispatch(receiveSearchResults(results));
  });
};
