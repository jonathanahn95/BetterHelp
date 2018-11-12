import * as AdjectivesApiUtil from "./../util/adjective_util";

export const FETCH_ADJECTIVE = "FETCH_ADJECTIVE";

export const fetchAdjective = payload => {
  return {
    type: FETCH_ADJECTIVE,
    payload
  };
};

export const requestAdjective = adjective => dispatch => {
  return AdjectivesApiUtil.fetchAdjective(adjective).then(payload => {
    return dispatch(fetchAdjective(payload));
  });
};

export const updateAdjective = adjective => {
  return dispatch => {
    return AdjectivesApiUtil.updateAdjective(adjective).then(adjective => {
      return dispatch(fetchAdjective(adjective));
    });
  };
};
