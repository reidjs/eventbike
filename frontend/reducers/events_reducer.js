import {
  RECEIVE_EVENTS
} from '../actions/events_actions'
import merge from 'lodash/merge';

const _nullEvents = {
  
}

const eventsReducer = (state = _nullEvents, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    // case BOOKMARK_EVENT:

    default: 
      return state;
  }
}

export default eventsReducer;
