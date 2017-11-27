import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';

export const receiveBookmarks = (bookmarkedEvents) => ({
  type: RECEIVE_BOOKMARKS,
  bookmarkedEvents
});
export const receiveTickets = (registeredEvents) => ({
  type: RECEIVE_TICKETS,
  registeredEvents
});

export const getBookmarks = () => dispatch => (
  UserAPIUtil.fetchBookmarkedEvents()
    .then(res => dispatch(receiveBookmarks(res)))
);
export const getTickets = () => dispatch => (
  UserAPIUtil.fetchRegisteredEvents()
    .then(res => dispatch(receiveTickets(res)))
);


//also created events