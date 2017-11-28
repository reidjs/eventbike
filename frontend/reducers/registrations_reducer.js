import {
  REGISTER_EVENT
} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge'

const _nullRegistrations = []

const registrationsReducer = (state = _nullRegistrations, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REGISTER_EVENT:
      return [...action.payload.registrations]
    case RECEIVE_CURRENT_USER:
      if (action.currentUser)
        return [...action.currentUser.attending_events];
      else 
        return _nullRegistrations
    default:
      return state;
  }
}

export default registrationsReducer;