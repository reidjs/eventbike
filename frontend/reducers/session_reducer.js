//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_reducer.js
import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERNAME, 
  RECEIVE_NEW_USERNAME,
  RESET_POTENTIAL_USER,
} from '../actions/session_actions';

// import {
//   BOOKMARK_EVENT,
//   RECEIVE_TICKETS
// } from '../actions/user_actions';

import {
  REGISTER_EVENT,
  UNREGISTER_EVENT
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
  let updated_events_attending;
  let updated_bookmarks;
  switch(action.type) {
    case RESET_POTENTIAL_USER:
      return _nullUser;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state)
      newState.newUserFlag = false;
      newState.potentialUser = null;
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_NEW_USERNAME:
      potentialUser = action.username;
      newUserFlag = true
      return merge({}, { potentialUser, newUserFlag });
    case RECEIVE_USERNAME:
      potentialUser = action.username.username //refactor this
      return merge({}, { potentialUser });
    case REGISTER_EVENT:
      newState = merge({}, state)
      // updated_events_attending = action.registration.attending_events 
      // newState.currentUser.attending_events = updated_events_attending;
      return newState;
    case UNREGISTER_EVENT:
      newState = merge({}, state)
      // updated_events_attending = action.registration.attending_events       
      // newState.currentUser.attending_events = updated_events_attending;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;