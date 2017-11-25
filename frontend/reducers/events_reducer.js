import {
  RECEIVE_EVENTS,
  REGISTER_EVENT
} from '../actions/events_actions'
import merge from 'lodash/merge';

const _nullEvents = {

}

const eventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case REGISTER_EVENT:
      const user_id = action.registration.user_id
      const event_id = action.registration.event_id
      newState = merge({}, state)
      newState[event_id].attendees.push(user_id)
      return newState
    default: 
      return state;
  }
}

export default eventsReducer;
