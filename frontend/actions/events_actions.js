import * as EventsAPIUtil from '../util/events_api_util'

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const UNREGISTER_EVENT = "UNREGISTER_EVENT";


export const receiveEvents = (events) => {
  return ({
    type: RECEIVE_EVENTS,
    events
  })
}
export const receiveEvent = (event) => {
  // console.log("event received",event)
  return ({
    type: RECEIVE_EVENT,
    event
  })
}
//registration should have user object and event object
//registration: {event, user}
export const receiveRegistration = (user) => {
  // debugger
  return ({
    type: REGISTER_EVENT,
    user 
  })
}

export const unRegisterEvent = (registration) => {
  return ({
    type: UNREGISTER_EVENT,
    registration
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

export const newEvent = (event) => dispatch => (
  EventsAPIUtil.postEvent(event)
    .then(res => (
      dispatch(receiveEvent(res))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);


// export const requestRegistration = (eventId) => dispatch => (
//   EventsAPIUtil.postRegistration(eventId)
//     .then(res => (
//       dispatch(receiveRegistration(res))
//     ))
// );

// //The response has an event in it so it can tell the user the event they unregistered from.
// export const removeRegistration = (eventId) => dispatch => (
//   EventsAPIUtil.deleteRegistration(eventId)
//     .then(res => dispatch(unRegisterEvent(res)))
// )

