import {
  RECEIVE_BOOKMARKS
} from '../actions/user_actions';
import merge from 'lodash/merge'

const _nullBookmarkedEvents = {

}

const bookmarksReducer = (state = _nullBookmarkedEvents, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKMARKS:
      return merge({}, action.bookmarkedEvents);
    default:
      return state;
  }
}

export default bookmarksReducer;