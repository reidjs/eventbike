import {
  RECEIVE_TICKETS
} from '../actions/user_actions';
import merge from 'lodash/merge'

const _nullRegisteredEvents = {

}

const ticketsReducer = (state = _nullRegisteredEvents, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TICKETS:
      return merge({}, action.registeredEvents);
    default:
      return state;
  }
}

export default ticketsReducer;