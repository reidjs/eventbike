import {
  RECEIVE_BOOKMARK
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
      //When users logout, this is called with null (set state to default)
      let user = action.currentUser;
      newBookmarks = [];
      user ? newBookmarks = user.bookmarked_events : newBookmarks = _nullBookmarks
      return [...newBookmarks]
    default:
      return state;
  }
}

export default bookmarksReducer;