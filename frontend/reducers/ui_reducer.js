import {
  DEMO_USER,
  FLASH_MESSAGE
} from '../actions/ui_actions'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import merge from 'lodash/merge'

const _defaultState = {
  demoUser: null,
  flash: []
}

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DEMO_USER:
      return merge({}, {demoUser: action.demoUser})
    case RECEIVE_CURRENT_USER:
      //we received a log in, so set the demo user to null
      return merge({}, {demoUser: null})
    case FLASH_MESSAGE: 
      //shjould dissapear on URL change
      return merge({}, {flash: [action.message]})
    default:
      return state;
  }
}

export default uiReducer;