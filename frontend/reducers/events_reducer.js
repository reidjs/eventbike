import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REGISTER_EVENT
} from '../actions/events_actions'
import merge from 'lodash/merge';

const _nullEvents = {

}
//we do not have to receive a registered event because it is updated
//on the backend. Simply update the event.
const eventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      newState = merge({}, state);
      newState[action.event.id] = action.event
      return newState;
    // case REGISTER_EVENT:
    //   const user_id = action.registration.user_id
    //   const event_id = action.registration.event_id
    //   newState = merge({}, state)
      // newState[event_id].attendees.push(user_id)
    default: 
      return state;
  }
}

export default eventsReducer;
