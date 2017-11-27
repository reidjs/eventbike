import { combineReducers } from 'redux';

import events from './events_reducer';
import bookmarks from './bookmarks_reducer';
import users from './users_reducer'; //to update bookmarks/registers
export default combineReducers({
  events,
  bookmarks,
  users
});
