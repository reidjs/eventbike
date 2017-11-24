import {
  RECEIVE_ERRORS
} from '../actions/events_actions';

export default (state = [], action) => {
  // console.log(action)
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}