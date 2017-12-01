import {
  RECEIVE_EVENT_ERRORS, RESET_EVENT_ERRORS
} from '../actions/events_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case RESET_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
}