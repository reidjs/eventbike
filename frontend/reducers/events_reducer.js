import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
} from '../actions/events_actions';


import {
  RECEIVE_BOOKMARK,
  REGISTER_EVENT
} from '../actions/user_actions';

import merge from 'lodash/merge';

const _nullEvents = {

}
//we do not have to receive a registered event because it is updated
//on the backend. Simply update the event.
const eventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state);
  let newState;
  let event_id;
  let event;
  switch(action.type) {
    case RECEIVE_BOOKMARK: {
      if (action.payload.event) {
        event = action.payload.event; 
        return merge({}, state, {[event.id] : action.payload.event})
      } else { 
        return state;
      }
    }
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    //Receive event removes all the other events from memory. 
    case RECEIVE_EVENT:
      // newState = merge({}, state);
      event = action.event 

      return merge({}, state, {[event.id] : event});
      
      // newState = merge({}, state, action.event)
      // newState[action.event.id] = action.event
      // debugger
      // return newState;
    case REGISTER_EVENT:
      // event_id = action.registration.eventId;

      // newState = merge({}, state)
      // newState[event_id].attendees = [...action.registration.attendees] //update event
      // debugger;
      if (action.payload.event) {
        event = action.payload.event;
        return merge({}, state, {[event.id] : event});
      } else {
        return state;
      }
    // case UNREGISTER_EVENT:
    //   event_id = action.registration.eventId;
    //   newState = merge({}, state);  
    //   newState[event_id].attendees = [...action.registration.attendees]; //update event
    //   return newState 
    default: 
      return state;
  }
}

export default eventsReducer;
