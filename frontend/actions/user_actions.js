import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const receiveBookmarks = (bookmarkedEvents) => ({
  type: RECEIVE_BOOKMARKS,
  bookmarkedEvents
})

export const getBookmarks = () => dispatch => (
  UserAPIUtil.fetchBookmarkedEvents()
    .then(res => dispatch(receiveBookmarks(res)))
)


