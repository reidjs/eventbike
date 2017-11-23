import {
  DEMO_USER,
  FLASH_MESSAGE
} from '../actions/ui_actions'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import merge from 'lodash/merge'



const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DEMO_USER:
      return merge({}, {demoUser: action.demoUser})
    case RECEIVE_CURRENT_USER:
      //we received a log in, set the demo user to null
      return merge({}, {user: null})
    default:
      return state;
  }
}

export default uiReducer;