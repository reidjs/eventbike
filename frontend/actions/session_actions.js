//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/actions/session_actions.js
import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USERNAME = 'RECEIVE_USERNAME';
export const RECEIVE_NEW_USERNAME = 'RECEIVE_NEW_USERNAME';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveNewUsername = username => ({
  type: RECEIVE_NEW_USERNAME,
  username
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
export const receiveUsername = username => ({
  type: RECEIVE_USERNAME,
  username
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => {
  // console.log(user)
  return(
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)};

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
//look for user by username in db
export const lookup = (username) => dispatch => (
  SessionAPIUtil.fetchUserByUsername(username)
    .then(username => dispatch(receiveUsername(username)),
    err => {
      //New username detected
      if (err.status === 404) {
        return (
          dispatch(receiveNewUsername(username)))
      } else {
        //username is invalid (e.g., too short)
        return (
          dispatch(receiveErrors(err.responseJSON))
        )
      }
    })
)