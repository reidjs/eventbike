import {
  DEMO_USER,
  FLASH_MESSAGE, 
  CLEAR_FLASH
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
  // console.log('ui reducer', action)
  let newState;
  switch(action.type) {
    case DEMO_USER:
      return merge({}, {demoUser: action.demoUser})
    case RECEIVE_CURRENT_USER:
      //we received a log in, so set the demo user to null
      return merge({}, {demoUser: null})
    case FLASH_MESSAGE: 
      //shjould dissapear on URL change
      // console.log('flash message received', action)
      return merge({}, {flash: [action.message]})
    case CLEAR_FLASH:
      console.log('trying to clear flash')
      newState = merge({}, state)
      newState.flash = []
      console.log('newstatE: ', newState)
      return newState;
    default:
      // console.log('return default state')
      return state;
  }
}

export default uiReducer;