import {
  DEMO_USER,
} from '../actions/ui_actions'
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions'
import merge from 'lodash/merge'

const _defaultState = {
  demoUser: null
}

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log('ui reducer', action)
  let newState;
  switch(action.type) {
    case DEMO_USER:
      return merge({}, {demoUser: action.demoUser})
    case RECEIVE_CURRENT_USER:
      //we received a log in, so set the demo user to null
      return merge({}, {demoUser: null})
    default:
      // console.log('return default state')
      return state;
  }
}

export default uiReducer;