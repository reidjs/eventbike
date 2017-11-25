import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REGISTER_EVENT = "REGISTER_EVENT";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}

export const receiveRegistration = (userId) => {
  return ({
    type: REGISTER_EVENT,
    userId 
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

export const getEvent = (eventId) => dispatch => (
  EventsAPIUtil.fetchEvent(eventId)
    .then(res => (
      dispatch(receiveEvent(res))
    ))
);

//get event first 

export const requestRegistration = (eventId, userId) => dispatch => (
  EventsAPIUtil.postRegistration(eventId, userId)
    .then(res => (
      dispatch(receiveRegistration(res))
    ))
);