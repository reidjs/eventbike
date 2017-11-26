//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_reducer.js
import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERNAME, 
  RECEIVE_NEW_USERNAME,
  RESET_POTENTIAL_USER
} from '../actions/session_actions';

import {
  REGISTER_EVENT
} from '../actions/events_actions'; //to update the user when they register

const _nullUser = Object.freeze({
  currentUser: null,
  potentialUser: null,
  newUserFlag: false
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let potentialUser;
  let newUserFlag;
  let newState;
  switch(action.type) {
    case RESET_POTENTIAL_USER:
      // console.log('reset user!')
      return _nullUser;
    case RECEIVE_CURRENT_USER:
      //this should probably reset potential user and new user flag
      newState = merge({}, state)
      newState.newUserFlag = false;
      newState.potentialUser = null;
      newState.currentUser = action.currentUser;
      // console.log('session receive user', action)
      // const currentUser = action.currentUser;
      return newState;
    case RECEIVE_NEW_USERNAME:
      // console.log('new user:', action)
      potentialUser = action.username;
      newUserFlag = true
      return merge({}, { potentialUser, newUserFlag });
    case RECEIVE_USERNAME:
      // console.log("Received username", action.username.username)
      potentialUser = action.username.username //refactor this
      return merge({}, { potentialUser });
    case REGISTER_EVENT:
      // console.log('register session user')
      // debugger
      newState = merge({}, state)
      const updated_events_attending = action.registration.attending_events 
      newState.currentUser.attending_events = updated_events_attending;
      // debugger;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;