//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_errors_reducer.js
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_USERNAME
} from '../actions/session_actions';

export default (state = [], action) => {
  // console.log(action, state)
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return state;
    case RECEIVE_CURRENT_USER:
      return state; //may cause issues
    case RECEIVE_USERNAME:
      console.log('recieve username: ', action)
      return state;
    default:
      return state;
  }
};