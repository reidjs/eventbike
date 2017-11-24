import { combineReducers } from 'redux';

// import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { reducer as flash } from 'redux-flash';
const rootReducer = combineReducers({
  session,
  errors,
  ui,
  flash
});

export default rootReducer;
