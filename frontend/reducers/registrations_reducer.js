import {
  REGISTER_EVENT
} from '../actions/user_actions';
import merge from 'lodash/merge'

const _nullRegistrations = []

const registrationsReducer = (state = _nullRegistrations, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REGISTER_EVENT:
      return merge({}, action.payload.registration);
    default:
      return state;
  }
}

export default registrationsReducer;