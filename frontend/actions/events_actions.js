import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}
//untested
export const receiveErrors = (errors) => {
  // console.log('receivedL', errors)
  return ({
    type: RECEIVE_ERRORS,
    errors
  })
}

export const getEvents = () => dispatch => (
  EventsAPIUtil.fetchEvents()
  .then(res => (
    dispatch(receiveEvents(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);