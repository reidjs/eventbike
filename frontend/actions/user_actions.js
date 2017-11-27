import * as UserAPIUtil from '../util/user_api_util';
import { RECEIVE_EVENTS } from './events_actions';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';

export const receiveBookmarks = (events) => ({
  type: RECEIVE_EVENTS,
  events
});
export const receiveTickets = (events) => ({
  type: RECEIVE_EVENTS,
  events
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