//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_reducer.js
import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERNAME, 
  RECEIVE_NEW_USERNAME
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  potentialUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let potentialUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_NEW_USERNAME:
      console.log('new user:', action)
      potentialUser = action.username;
      return merge({}, { potentialUser });
    case RECEIVE_USERNAME:
      console.log("Received username", action.username.username)
      potentialUser = action.username.username //refactor this
      return merge({}, { potentialUser })
    default:
      return state;
  }
};

export default sessionReducer;