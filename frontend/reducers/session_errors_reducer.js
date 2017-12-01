//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_errors_reducer.js
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_USERNAME,
  RECEIVE_NEW_USERNAME,
  RESET_POTENTIAL_USER,
  RESET_ERRORS
} from '../actions/session_actions';
export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return []; //may cause issues
    case RECEIVE_USERNAME:
      return [];
    case RECEIVE_NEW_USERNAME:
      return [];
    case RESET_POTENTIAL_USER:
      return [];
    default:
      return state;
  }
};