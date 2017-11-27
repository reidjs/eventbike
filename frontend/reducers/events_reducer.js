import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REGISTER_EVENT,
  UNREGISTER_EVENT
} from '../actions/events_actions'
import merge from 'lodash/merge';

const _nullEvents = {

}
//we do not have to receive a registered event because it is updated
//on the backend. Simply update the event.
const eventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state);
  let newState;
  let event_id;
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    //Receive event removes all the other events from memory. 
    case RECEIVE_EVENT:
      // newState = merge({}, state);
      newState = merge({}, state, action.event)
      // newState[action.event.id] = action.event
      debugger
      return newState;
    case REGISTER_EVENT:
      // debugger
      event_id = action.registration.eventId;
      newState = merge({}, state)
      newState[event_id].attendees = [...action.registration.attendees] //update event
      // debugger;
      return newState;
    case UNREGISTER_EVENT:
      event_id = action.registration.eventId;
      newState = merge({}, state)  
      newState[event_id].attendees = [...action.registration.attendees] //update event
      return newState 
    default: 
      return state;
  }
}

export default eventsReducer;
