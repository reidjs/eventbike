import {
  RECEIVE_BOOKMARK,
  getBookmarks
} from '../actions/user_actions';
import merge from 'lodash/merge'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullBookmarks = []

const bookmarksReducer = (state = _nullBookmarks, action) => {
  Object.freeze(state);
  let newBookmarks ;
  switch(action.type) {
    case RECEIVE_BOOKMARK:
      // const bookmarks = action.payload.bookmarks
      return [...action.payload.bookmarks]
    
    case RECEIVE_CURRENT_USER:
      // debugger
      if (action.currentUser)
        return [...action.currentUser.bookmarked_events];
      else 
        return _nullBookmarks
    default:
      return state;
  }
}

export default bookmarksReducer;