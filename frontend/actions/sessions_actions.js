import * as SessionAPIUtil from "./../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

function receiveLoginErrors(errors) {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    errors
  };
}

function receiveSignupErrors(errors) {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
  };
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchCurrentUser = user => dispatch => {
  return SessionAPIUtil.currentUser(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  });
};
export const fetchAllUsers = () => dispatch => {
  return SessionAPIUtil.fetchAllUsers().then(users => {
    return dispatch(receiveAllUsers(users));
  });
};

export const signup = user => dispatch =>
  SessionAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
