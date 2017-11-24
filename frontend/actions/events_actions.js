import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}

export const getEvents = () => dispatch => (
  EventsAPIUtil.fetchEvents().then(res => (
    dispatch(receiveEvents(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);