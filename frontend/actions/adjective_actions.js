import * as AdjectivesApiUtil from "./../util/adjective_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_COOL = "RECEIVE_COOL";
export const UPDATE_COOL = "UPDATE_COOL";
export const RECEIVE_FUNNY = "RECEIVE_FUNNY";
export const UPDATE_FUNNY = "UPDATE_FUNNY";
export const RECEIVE_USEFUL = "RECEIVE_USEFUL";
export const UPDATE_USEFUL = "UPDATE_USEFUL";

export const receiveLike = payload => {
  return {
    type: RECEIVE_LIKE,
    payload
  };
};

export const removeLike = payload => {
  return {
    type: REMOVE_LIKE,
    payload
  };
};
export const receiveCool = payload => {
  return {
    type: RECEIVE_COOL,
    payload
  };
};

export const editCool = payload => {
  return {
    type: UPDATE_COOL,
    payload
  };
};

export const receiveFunny = payload => {
  return {
    type: RECEIVE_FUNNY,
    payload
  };
};

export const editFunny = payload => {
  return {
    type: UPDATE_FUNNY,
    payload
  };
};

export const receiveUseful = payload => {
  return {
    type: RECEIVE_USEFUL,
    payload
  };
};

export const editUseful = payload => {
  return {
    type: UPDATE_USEFUL,
    payload
  };
};

export const fetchCool = cool => dispatch => {
  return AdjectivesApiUtil.fetchCool(cool).then(cool => {
    return dispatch(receiveCool(cool));
  });
};

export const fetchFunny = funny => dispatch => {
  return AdjectivesApiUtil.fetchFunny(funny).then(funny => {
    return dispatch(receiveFunny(funny));
  });
};

export const fetchUseful = useful => dispatch => {
  return AdjectivesApiUtil.fetchUseful(useful).then(useful => {
    return dispatch(receiveUseful(useful));
  });
};

export const deleteLike = like => dispatch => {
  return AdjectivesApiUtil.deleteLike(like).then(like => {
    return dispatch(removeLike(like));
  });
};

export const createLike = like => dispatch => {
  return AdjectivesApiUtil.createLike(like).then(like => {
    return dispatch(receiveLike(like));
  });
};

export const updateCool = cool => dispatch => {
  return AdjectivesApiUtil.updateCool(cool).then(cool => {
    debugger;
    return dispatch(editCool(cool));
  });
};

export const updateUseful = useful => dispatch => {
  return AdjectivesApiUtil.updateUseful(useful).then(useful => {
    debugger;
    return dispatch(editUseful(useful));
  });
};

export const updateFunny = funny => dispatch => {
  debugger;
  return AdjectivesApiUtil.updateFunny(funny).then(funny => {
    debugger;
    return dispatch(editFunny(funny));
  });
};
